import React from 'react';
import { motion } from 'framer-motion';
import CategoryNav from '../components/layout/CategoryNav';
import AnnouncementBanner from '../components/dashboard/AnnouncementBanner';
import MostUsedServices from '../components/dashboard/MostUsedServices';

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      {/* CategoryNav - h-12 (48px) */}
      <CategoryNav />
      
      {/* Content - padding-top correcto: 64 + 56 + 48 = 168px + margen = 192px */}
      <main className="pt-[200px] px-8 pb-8">
          {/* AnnouncementBanner */}
          <AnnouncementBanner />
          
          {/* Línea divisoria */}
          <hr className="border-t-4 border-gray-600 my-8" />
          
          {/* MostUsedServices */}
          <MostUsedServices />
      </main>
    </motion.div>
  );
}