import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

export default function FomoBanner() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) return { hours: 0, minutes: 0, seconds: 0 };
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-24 right-3 z-[60] flex flex-col items-end">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="btn-gradient shadow-lg rounded-full flex items-center justify-center w-16 h-16 md:w-20 md:h-20 focus:outline-none border border-white/30 hover:scale-105 transition-transform"
            aria-label="Show offer details"
          >
            <span className="flex flex-col items-center justify-center">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-white mb-0.5" />
              <span className="font-mono text-[10px] md:text-xs text-white font-bold leading-none">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-none shadow-xl w-72 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-semibold text-sm">Q1 slots filling fast</span>
          </div>
          <div className="font-body text-xs mb-1">
            Book before{' '}
            <span className="font-display font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>{' '}
            to lock in <span className="font-bold">20% off</span> your first project.
          </div>
          <button
            onClick={() => setVisible(false)}
            className="mt-1 px-2 py-1 rounded bg-white/20 hover:bg-white/30 text-xs font-medium transition-colors"
          >
            Dismiss
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
