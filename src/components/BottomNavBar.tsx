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
    { id: 'signin', label: 'Sign In', icon: '/assets/signin.svg', href: '/signin' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} className="flex flex-col items-center py-2">
            <div className={`p-1 ${activeTab === item.id ? 'text-orange-600' : 'text-gray-500'}`}>
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className={activeTab === item.id ? 'filter brightness-0 saturate-100 hue-rotate-15' : ''}
              />
            </div>
            <span 
              className="mt-1"
              style={{
                width: '44px',
                height: '20px',
                fontFamily: 'var(--heading-heading-xs-font)',
                fontWeight: 'var(--heading-heading-xs-weight)',
                fontStyle: 'SemiBold',
                fontSize: 'var(--heading-heading-xs-size)',
                leadingTrim: 'NONE',
                lineHeight: 'var(--heading-heading-xs-line-height)',
                letterSpacing: 'var(--heading-heading-xs-letter-spacing)',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: activeTab === item.id ? 'var(--colour-semantic-text-text-brand, #874B2C)' : '#6B7280'
              }}
            >
              {item.label}
            </span>
            {activeTab === item.id && (
              <div className="w-8 h-0.5 bg-orange-600 mt-1 rounded-full"></div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
