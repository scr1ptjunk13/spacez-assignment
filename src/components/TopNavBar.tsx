import Image from 'next/image';

interface TopNavBarProps {
  onMenuClick?: () => void;
}

export default function TopNavBar({ onMenuClick }: TopNavBarProps) {
  return (
    <div 
      className="flex items-center opacity-100"
      style={{
        width: '100%',
        height: '56px',
        justifyContent: 'space-between',
        top: '40px',
        paddingTop: '16px', // padding/400
        paddingRight: '16px', // padding/400
        paddingBottom: '16px', // padding/400
        paddingLeft: '24px', // padding/600
        backgroundColor: '#FFFFFF' // semantic background
      }}
    >
      {/* Left side - Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/logo.svg"
          alt="SPACEZ"
          width={114}
          height={24}
          priority
        />
      </div>

      {/* Right side - Menu icon */}
      <button 
        className="flex items-center justify-center transition-all duration-150 ease-out active:scale-95 active:opacity-80"
        onClick={() => onMenuClick?.()}
      >
        <Image
          src="/assets/menu.svg"
          alt="Menu"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
