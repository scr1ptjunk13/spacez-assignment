'use client';

import TopNavBar from '@/components/TopNavBar';
import BottomNavBar from '@/components/BottomNavBar';
import OffersPage from '@/components/OffersPage';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Top Navigation */}
      <div className="sticky top-0 z-20 bg-white">
        <TopNavBar />
      </div>
      
      {/* Main Content */}
      <OffersPage />
      
      {/* Bottom Navigation */}
      <BottomNavBar activeTab="offers" />
    </div>
  );
}
