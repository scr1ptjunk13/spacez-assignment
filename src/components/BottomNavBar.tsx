import Image from 'next/image';
import Link from 'next/link';

interface BottomNavBarProps {
  activeTab?: string;
}

export default function BottomNavBar({ activeTab = 'offers' }: BottomNavBarProps) {
  const navItems = [
    { id: 'explore', label: 'Explore', icon: '/assets/search.svg', href: '/explore' },
    { id: 'offers', label: 'Offers', icon: '/assets/offer-BOLD.svg', href: '/' },
    { id: 'bookings', label: 'Bookings', icon: '/assets/bookings.svg', href: '/bookings' },
    { id: 'wishlist', label: 'Wishlist', icon: '/assets/favourite.svg', href: '/wishlist' },
    { id: 'profile', label: 'Profile', icon: '/assets/signin.svg', href: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} className="flex flex-col items-center py-2">
            <div className="p-1" style={{ filter: activeTab === item.id ? 'brightness(0) saturate(100%) invert(35%) sepia(40%) saturate(1000%) hue-rotate(15deg) brightness(95%) contrast(85%)' : 'brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}>
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
              />
            </div>
            <span 
              className="mt-1 text-xs"
              style={{
                fontSize: '12px',
                fontWeight: activeTab === item.id ? '700' : '500',
                textAlign: 'center',
                color: activeTab === item.id ? '#874B2C' : '#6B7280'
              }}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
