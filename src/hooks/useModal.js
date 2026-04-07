import { useState } from 'react';

export function useModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return {
    showDemoModal,
    openDemoModal:   () => setShowDemoModal(true),
    closeDemoModal:  () => setShowDemoModal(false),
    showSignupModal,
    openSignupModal:  () => setShowSignupModal(true),
    closeSignupModal: () => setShowSignupModal(false),
  };
}
