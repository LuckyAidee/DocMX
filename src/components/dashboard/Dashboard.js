import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../layout/Sidebar';
import TopBar from '../layout/TopBar';
import SearchBar from '../layout/SearchBar';
import CategoryNav from '../layout/CategoryNav';
import AnnouncementBanner from './AnnouncementBanner';
import MostUsedServices from './MostUsedServices';

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex"
    >
      {/* Sidebar - sin prop, funciona con hover normal */}
      <Sidebar />

      {/* Main Content Area - margen para sidebar normal (72px) */}
      <div className="flex-1 ml-[4.5rem]">
        {/* TopBar - h-16 (64px) */}
        <TopBar />
        
        {/* SearchBar - h-14 (56px) */}
        <SearchBar />
        
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
      </div>
    </motion.div>
  );
}