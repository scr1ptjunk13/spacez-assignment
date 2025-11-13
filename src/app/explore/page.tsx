import TopNavBar from '@/components/TopNavBar';
import BottomNavBar from '@/components/BottomNavBar';

export default function ExplorePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNavBar />
      
      {/* Main Content */}
      <div className="pt-16 pb-24 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 
            className="mb-4"
            style={{
              color: '#4B4E4B',
              fontSize: '24px',
              fontWeight: '600',
              lineHeight: '28px',
              letterSpacing: '0px'
            }}
          >
            Explore
          </h1>
          <p 
            style={{
              color: '#666666',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0px'
            }}
          >
            To be implemented
          </p>
        </div>
      </div>

      <BottomNavBar activeTab="explore" />
    </div>
  );
}
