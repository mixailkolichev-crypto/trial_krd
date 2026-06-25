/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { AdvantagesSection } from './components/AdvantagesSection';
import { PodiumReviews } from './components/PodiumReviews';
import { TeamPit } from './components/TeamPit';
import { FooterFinishLine } from './components/FooterFinishLine';
import { BookingModal } from './components/BookingModal';
import { CopyDocModal } from './components/CopyDocModal';
import { ActiveModal, ServiceCard } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const handleSelectService = (service: ServiceCard) => {
    // Open booking modal when a service card is clicked
    setActiveModal('booking');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-[#E10600] selection:text-black">
      {/* Header / Navigation Bar */}
      <Navbar onOpenModal={setActiveModal} />

      {/* Main Pit Stop Body */}
      <main className="flex-1 flex flex-col">
        {/* Block 2: Hero Section (Starting Grid) */}
        <Hero onOpenModal={setActiveModal} />

        {/* Block 3: Core Services Section (Pit Stop Menu Grid 01-05) */}
        <ServicesGrid onSelectService={handleSelectService} onOpenModal={setActiveModal} />

        {/* Block 4: Competitive Advantages (Pillars & Pain Points Counter-Attack) */}
        <AdvantagesSection onOpenModal={setActiveModal} />

        {/* Block 5: Social Proof Section (Podium Testimonials 4.4★) */}
        <PodiumReviews onOpenModal={setActiveModal} />

        {/* Team Mechanics Shoutout */}
        <TeamPit onOpenModal={setActiveModal} />
      </main>

      {/* Block 6: Contact & Footer (Finish Line Map Mockup & Phones) */}
      <FooterFinishLine onOpenModal={setActiveModal} />

      {/* Modals */}
      <BookingModal
        modalType={activeModal}
        onClose={() => setActiveModal(null)}
      />

      <CopyDocModal
        isOpen={activeModal === 'copydoc'}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}

