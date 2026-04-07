import { useEffect, useRef, useCallback } from 'react';

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  phase: number;
  speed: number;
  stopColor: string; // Pre-calculated for performance
}

// ✅ Blobs kam kiye taaki GPU/CPU load kam ho
const BLOB_CONFIGS = [
  { color: 'rgba(99, 102, 241, 0.06)', stopColor: 'rgba(99, 102, 241, 0.01)', radius: 450, speed: 0.15 },
  { color: 'rgba(0, 180, 220, 0.04)', stopColor: 'rgba(0, 180, 220, 0.01)', radius: 380, speed: 0.2 },
  { color: 'rgba(139, 92, 246, 0.04)', stopColor: 'rgba(139, 92, 246, 0.01)', radius: 400, speed: 0.12 },
];

export default function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const blobsRef = useRef<Blob[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  const initBlobs = useCallback((w: number, h: number) => {
    blobsRef.current = BLOB_CONFIGS.map((cfg, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * cfg.speed,
      vy: (Math.random() - 0.5) * cfg.speed,
      radius: cfg.radius,
      color: cfg.color,
      stopColor: cfg.stopColor,
      phase: (i / BLOB_CONFIGS.length) * Math.PI * 2,
      speed: cfg.speed,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ✅ Performance optimization: alpha false aur desynchronized hint
    const ctx = canvas.getContext('2d', { 
      alpha: false,
      desynchronized: true 
    });
    if (!ctx) return;

    let w = 0, h = 0;

    const resize = () => {
      // ✅ Safer DPR for mobile performance (Keep it low)
      const dpr = Math.min(window.devicePixelRatio, 1.0); // 1.2 se 1.0 kiya rendering load kam karne ke liye

      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      if (blobsRef.current.length === 0) {
        initBlobs(w, h);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / w;
      mouseRef.current.targetY = e.clientY / h;
    };

    window.addEventListener('mousemove', onMouse, { passive: true });

    const draw = () => {
      // ✅ Animation speed kam ki taaki stutter na ho
      timeRef.current += 0.003; 
      const t = timeRef.current;

      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.02;
      m.y += (m.targetY - m.y) * 0.02;

      // Base background color
      ctx.fillStyle = '#F6F8FB';
      ctx.fillRect(0, 0, w, h);

      const blobs = blobsRef.current;

      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];

        // Movement logic
        b.x += b.vx + Math.sin(t * 0.3 + b.phase) * 0.3 + (m.x - 0.5) * 0.5;
        b.y += b.vy + Math.cos(t * 0.25 + b.phase) * 0.2;

        // Wrap around
        if (b.x < -b.radius) b.x = w + b.radius;
        if (b.x > w + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = h + b.radius;
        if (b.y > h + b.radius) b.y = -b.radius;

        const pulsedRadius = b.radius * (1 + Math.sin(t * 0.5 + b.phase) * 0.1);

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, pulsedRadius);
        grad.addColorStop(0, b.color);
        grad.addColorStop(0.6, b.stopColor);
        grad.addColorStop(1, 'rgba(246, 248, 251, 0)'); // Fades into background color

        ctx.fillStyle = grad;
        // Optimization: Sirf gradient area ko fill karein, poore canvas ko nahi
        ctx.beginPath();
        ctx.arc(b.x, b.y, pulsedRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [initBlobs]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ 
          zIndex: -1,
          contentVisibility: 'auto' // Browser optimization hint
        }}
      />

      {/* ✅ Noise overlay optimized: Opacity kam ki gayi hai */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          opacity: 0.15,
          mixBlendMode: 'overlay',
        }}
      />
    </>
  );
}