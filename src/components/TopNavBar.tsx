import Image from 'next/image';

export default function TopNavBar() {
  return (
    <div 
      className="flex items-center opacity-100"
      style={{
        width: '393px',
        height: '56px',
        justifyContent: 'space-between',
        top: '40px',
        paddingTop: '16px', // padding/400
        paddingRight: '20px', // padding/500
        paddingBottom: '16px', // padding/400
        paddingLeft: '24px', // padding/600
        backgroundColor: '#FFFFFF', // semantic background
        borderBottom: '1px solid #E5E6E5', // semantic border
        borderBottomWidth: '0.25px' // border/25
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
      <button className="flex items-center justify-center">
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
