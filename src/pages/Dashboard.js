import React from 'react';
import { motion } from 'framer-motion';
import CategoryNav from '../components/layout/CategoryNav';
import AnnouncementBanner from '../components/dashboard/AnnouncementBanner';
import MostUsedServices from '../components/dashboard/MostUsedServices';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white pt-[136px]">
      {/* CategoryNav fuera del motion.div para evitar bug de desplazamiento con animación de escala */}
      <CategoryNav />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        {/* Content - CategoryNav ya ocupa espacio en el flujo */}
        <main className="pt-2 px-8 pb-8">
            {/* AnnouncementBanner */}
            <AnnouncementBanner />

            {/* Línea divisoria */}
            <hr className="border-t-4 border-gray-600 my-8" />

            {/* MostUsedServices */}
            <MostUsedServices />
        </main>
      </motion.div>
    </div>
  );
}