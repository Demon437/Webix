import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection'; // Hero ko direct rakhein taaki pehla view fast ho
import MeshGradientBackground from '@/components/MeshGradientBackground';
import FomoBanner from '@/components/FomoBanner';
import StickyCta from '@/components/StickyCta';

// ✅ Lazy Loading: Niche wale components tabhi load honge jab zaroorat hogi
const TrustLogos = lazy(() => import('@/components/TrustLogos'));
const BentoSection = lazy(() => import('@/components/BentoSection'));
const ProblemSolution = lazy(() => import('@/components/ProblemSolution'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const StickyFeatures = lazy(() => import('@/components/StickyFeatures'));
const CtaBlock = lazy(() => import('@/components/CtaBlock'));
const CaseStudies = lazy(() => import('@/components/CaseStudies'));
const TechStack = lazy(() => import('@/components/TechStack'));
const ProcessTimeline = lazy(() => import('@/components/ProcessTimeline'));
const ImpactStats = lazy(() => import('@/components/ImpactStats'));
const TeamSection = lazy(() => import('@/components/TeamSection'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const StatsSection = lazy(() => import('@/components/StatsSection'));
const FooterSection = lazy(() => import('@/components/FooterSection'));

// Loading Placeholder (Jab tak component load ho raha ho)
const SectionLoader = () => <div className="h-40 w-full animate-pulse bg-gray-100/50 rounded-3xl mb-10" />;

const Index = () => {
  return (
    <div className="relative min-h-screen w-full scroll-smooth bg-[#F6F8FB]">
      
      {/* ✅ Background (Fixed & Optimized) */}
      <MeshGradientBackground />

      {/* ✅ Floating UI */}
      <FomoBanner />
      <StickyCta />

      <main className="relative z-10 w-full">
        <Navbar />

        {/* 1. Hero Section (Immediate Render) */}
        <HeroSection />

        {/* ✅ Baaki saare sections Suspense mein wrap kiye gaye hain */}
        <Suspense fallback={<SectionLoader />}>
          <div className="overflow-hidden">
            <TrustLogos />
            <ServicesSection />
            <BentoSection />
          </div>

          {/* Sticky section */}
          <StickyFeatures />

          <div className="overflow-hidden">
            <CtaBlock />
            <ProblemSolution />
            <CaseStudies />
            <TechStack />
            <ProcessTimeline />
            <CtaBlock variant="default" />
            <ImpactStats />
            <StatsSection />
            <TeamSection />
            <Testimonials />
            <PricingSection />
            <FAQSection />
            <CtaBlock variant="final" />
            <FooterSection />
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default Index;