import React, { useState } from 'react';
import { useModal } from './hooks/useModal';

import Navbar              from './components/Navbar';
import HeroBanner          from './components/HeroBanner';
import TrustBar            from './components/TrustBar';
import HowItWorks          from './components/HowItWorks';
import SpecialtiesSection  from './components/SpecialtiesSection';
import ProblemsSection     from './components/ProblemsSection';
import FeaturesGrid        from './components/FeaturesGrid';
import ComparisonTable     from './components/ComparisonTable';
import ROICalculator       from './components/ROICalculator';
import ReportsSection      from './components/ReportsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingPlans        from './components/PricingPlans';
import CountriesSection    from './components/CountriesSection';
import FAQSection          from './components/FAQSection';
import TeamSection         from './components/TeamSection';
import FinalCTA            from './components/FinalCTA';
import Footer              from './components/Footer';
import SignupModal         from './components/SignupModal';
import DemoModal           from './components/DemoModal';
import WhatsAppButton      from './components/WhatsAppButton';

export default function MedFlowLanding() {
  const [showBanner, setShowBanner] = useState(true);
  const {
    showDemoModal,   openDemoModal,   closeDemoModal,
    showSignupModal, openSignupModal, closeSignupModal,
  } = useModal();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        showBanner={showBanner}
        setShowBanner={setShowBanner}
        onOpenDemo={openDemoModal}
      />

      <HeroBanner
        showBanner={showBanner}
        onOpenSignup={openSignupModal}
        onOpenDemo={openDemoModal}
      />

      <TrustBar />
      <HowItWorks />
      <SpecialtiesSection />
      <ProblemsSection />
      <FeaturesGrid />
      <ComparisonTable />
      <ROICalculator />
      <ReportsSection />
      <TestimonialsSection />

      <PricingPlans
        onOpenSignup={openSignupModal}
        onOpenDemo={openDemoModal}
      />

      <CountriesSection />
      <FAQSection />
      <TeamSection />
      <FinalCTA />
      <Footer />

      <SignupModal show={showSignupModal} onClose={closeSignupModal} />
      <DemoModal   show={showDemoModal}   onClose={closeDemoModal} />
      <WhatsAppButton />
    </div>
  );
}
