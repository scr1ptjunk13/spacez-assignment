import { useState, useEffect, useRef } from 'react';
import TopNavBar from './TopNavBar';

interface CouponProps {
  code: string;
  title: string;
  description: string;
  discount: string;
  color: string;
}

function CouponCard({ code, title, description, discount, color }: CouponProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Check if discount contains "Flat" to handle different layouts
  const isPercentageDiscount = discount.includes('Flat');
  const discountParts = isPercentageDiscount ? discount.split(' ') : [discount];

  return (
    <div 
      className="flex mb-4 overflow-hidden opacity-100"
      style={{
        width: '100%',
        maxWidth: '400px',
        height: '184px',
        backgroundColor: 'rgba(193, 107, 62, 0.1)' // Lower opacity #C16B3E for separation
      }}
    >
      {/* Discount Section */}
      <div 
        className="flex flex-col justify-center items-center text-white opacity-100"
        style={{
          width: '68px',
          height: '184px',
          background: '#B8724E',
          borderRight: '2px dashed rgba(255, 255, 255, 0.5)'
        }}
      >
        {isPercentageDiscount ? (
          <div className="flex flex-col items-center transform -rotate-90">
            <div style={{
              fontFamily: 'Libre Caslon Text',
              fontSize: '32px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              {discountParts[0]}
            </div>
            <div style={{
              fontFamily: 'Libre Caslon Text',
              fontSize: '32px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'uppercase'
            }}>
              {discountParts[1]}
            </div>
          </div>
        ) : (
          <div className="transform -rotate-90 whitespace-nowrap" style={{
            fontFamily: 'Libre Caslon Text',
            fontSize: '32px',
            fontWeight: '600',
            color: 'white',
            lineHeight: '120%',
            letterSpacing: '0%',
            textTransform: 'uppercase'
          }}>
            {discount}
          </div>
        )}
      </div>

      {/* Coupon Section - Right side content */}
      <div className="flex-1" style={{ 
        padding: '20px', 
        backgroundColor: '#FDF9F7',
        borderLeft: '2px solid var(--colour-semantic-border-brand-prominent, #AD6038)'
      }}>
        {/* Header with title and copy button */}
        <div 
          className="flex justify-between items-center opacity-100"
          style={{
            marginBottom: '8px'
          }}
        >
          {/* Title */}
          <h3 
            className="opacity-100"
            style={{
              color: '#2D2D2D',
              fontSize: '17px',
              fontWeight: '700',
              letterSpacing: 'normal',
              marginTop: '0',
              marginBottom: '0'
            }}
          >
            {title}
          </h3>

          {/* Copy Button */}
          <button 
            onClick={handleCopy}
            className="flex items-center opacity-100"
            style={{
              gap: '6px',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0',
              alignItems: 'center'
            }}
          >
            {/* Copy Icon */}
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_571_243" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                <rect width="18" height="18" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_571_243)">
                <path d="M6.96204 13.6875C6.44916 13.6875 6.01373 13.5085 5.65573 13.1505C5.29773 12.7925 5.11873 12.3571 5.11873 11.8442V3.15581C5.11873 2.64294 5.29773 2.2075 5.65573 1.8495C6.01373 1.4915 6.44916 1.3125 6.96204 1.3125H13.4004C13.9133 1.3125 14.3487 1.4915 14.7067 1.8495C15.0647 2.2075 15.2437 2.64294 15.2437 3.15581V11.8442C15.2437 12.3571 15.0647 12.7925 14.7067 13.1505C14.3487 13.5085 13.9133 13.6875 13.4004 13.6875H6.96204ZM6.96204 12.075H13.4004C13.4582 12.075 13.511 12.0509 13.559 12.0028C13.6072 11.9548 13.6312 11.9019 13.6312 11.8442V3.15581C13.6312 3.09806 13.6072 3.04519 13.559 2.99719C13.511 2.94906 13.4582 2.925 13.4004 2.925H6.96204C6.90429 2.925 6.85141 2.94906 6.80341 2.99719C6.75529 3.04519 6.73123 3.09806 6.73123 3.15581V11.8442C6.73123 11.9019 6.75529 11.9548 6.80341 12.0028C6.85141 12.0509 6.90429 12.075 6.96204 12.075ZM3.84954 16.8C3.33666 16.8 2.90123 16.621 2.54323 16.263C2.18523 15.905 2.00623 15.4696 2.00623 14.9567V4.65581H3.61873V14.9567C3.61873 15.0144 3.64279 15.0673 3.69091 15.1153C3.73891 15.1634 3.79179 15.1875 3.84954 15.1875H11.9004V16.8H3.84954Z" fill={isCopied ? '#22C55E' : '#874B2C'} style={{ transition: 'fill 0.2s ease' }}/>
              </g>
            </svg>
            {/* Copy Label */}
            <span 
              style={{
                color: isCopied ? '#22C55E' : '#874B2C',
                fontSize: '16px',
                fontWeight: '700',
                transition: 'color 0.2s ease'
              }}
            >
              {isCopied ? 'Copied!' : 'Copy'}
            </span>
          </button>
        </div>

        {/* Description Text */}
        <p 
          className="opacity-100"
          style={{
            color: '#666666',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1.5',
            marginTop: '0',
            marginBottom: '12px'
          }}
        >
          {description}
        </p>

        {/* Divider Line */}
        <div 
          className="opacity-100"
          style={{
            width: '100%',
            height: '0px',
            borderTop: '1px solid #E5E6E5',
            marginBottom: '12px'
          }}
        />

        {/* Read More Button */}
        <button 
          className="opacity-100"
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#5A5A5A',
            fontSize: '13px',
            fontWeight: '500',
            padding: '0',
            textAlign: 'left'
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

function GiftCardCoupon({ code, title, description, discount, color }: CouponProps) {
  const handleCollect = () => {
    // Handle collect action
    console.log('Collecting gift card:', code);
  };

  // Check if discount contains "Flat" to handle different layouts
  const isPercentageDiscount = discount.includes('Flat');
  const discountParts = isPercentageDiscount ? discount.split(' ') : [discount];

  return (
    <div 
      className="flex mb-4 overflow-hidden opacity-100"
      style={{
        width: '345px',
        height: '184px',
        backgroundColor: 'rgba(193, 107, 62, 0.1)' // Lower opacity #C16B3E for separation
      }}
    >
      {/* Discount Section */}
      <div 
        className="flex flex-col justify-center items-center text-white opacity-100"
        style={{
          width: '68px',
          height: '184px',
          background: color,
          borderRight: '2px dashed rgba(255, 255, 255, 0.5)'
        }}
      >
        {isPercentageDiscount ? (
          <div className="flex flex-col items-center transform -rotate-90">
            <div style={{
              fontFamily: 'Libre Caslon Text',
              fontSize: '32px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              {discountParts[0]}
            </div>
            <div style={{
              fontFamily: 'Libre Caslon Text',
              fontSize: '32px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'uppercase'
            }}>
              {discountParts[1]}
            </div>
          </div>
        ) : (
          <div className="transform -rotate-90 whitespace-nowrap" style={{
            fontFamily: 'Libre Caslon Text',
            fontSize: '32px',
            fontWeight: '600',
            color: 'white',
            lineHeight: '120%',
            letterSpacing: '0%',
            textTransform: 'uppercase'
          }}>
            {discount}
          </div>
        )}
      </div>

      {/* Coupon Section - Right side content */}
      <div className="flex-1" style={{ 
        padding: '20px', 
        backgroundColor: '#FDF9F7',
        borderLeft: `2px solid ${color}`
      }}>
        {/* Header with title and collect button */}
        <div 
          className="flex justify-between items-center opacity-100"
          style={{
            marginBottom: '8px'
          }}
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <img 
              src={`/assets/${code.toLowerCase()}-logo.png`}
              alt={`${title} logo`}
              width="24"
              height="24"
              style={{ width: '24px', height: '24px' }}
            />
            <h3 
              className="opacity-100"
              style={{
                color: '#2D2D2D',
                fontSize: '17px',
                fontWeight: '700',
                letterSpacing: 'normal',
                marginTop: '0',
                marginBottom: '0'
              }}
            >
              {title}
            </h3>
          </div>

          {/* Collect Button */}
          <button 
            onClick={handleCollect}
            className="flex items-center opacity-100"
            style={{
              gap: '6px',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0',
              alignItems: 'center'
            }}
          >
            {/* Collect Label */}
            <span 
              style={{
                color: '#874B2C',
                fontSize: '16px',
                fontWeight: '700'
              }}
            >
              Collect
            </span>
          </button>
        </div>

        {/* Description Text */}
        <p 
          className="opacity-100"
          style={{
            color: '#666666',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1.5',
            marginTop: '0',
            marginBottom: '12px'
          }}
        >
          {description}
        </p>

        {/* Divider Line */}
        <div 
          className="opacity-100"
          style={{
            width: '100%',
            height: '0px',
            borderTop: '1px solid #E5E6E5',
            marginBottom: '12px'
          }}
        />

        {/* Read More Button */}
        <button 
          className="opacity-100"
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#7D7D7D',
            fontSize: '13px',
            fontWeight: '700',
            padding: '0',
            textAlign: 'left'
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

function PaymentOfferCard({ code, title, description, discount, color }: CouponProps) {
  // Check if discount contains "Flat" to handle different layouts
  const isPercentageDiscount = discount.includes('Flat');
  const discountParts = isPercentageDiscount ? discount.split(' ') : [discount];

  return (
    <div 
      className="flex mb-4 overflow-hidden opacity-100"
      style={{
        width: '345px',
        height: '184px',
        backgroundColor: 'rgba(193, 107, 62, 0.1)' // Lower opacity #C16B3E for separation
      }}
    >
      {/* Discount Section */}
      <div 
        className="flex flex-col justify-center items-center text-white opacity-100"
        style={{
          width: '68px',
          height: '184px',
          background: color,
          borderRight: '2px dashed rgba(255, 255, 255, 0.5)'
        }}
      >
        {isPercentageDiscount ? (
          <div className="flex flex-col items-center transform -rotate-90">
            <div style={{
              fontFamily: 'Libre Caslon Text',
              fontSize: '32px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              {discountParts[0]}
            </div>
            <div style={{
              fontFamily: 'Libre Caslon Text',
              fontSize: '32px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'uppercase'
            }}>
              {discountParts[1]}
            </div>
          </div>
        ) : (
          <div className="transform -rotate-90 whitespace-nowrap" style={{
            fontFamily: 'Libre Caslon Text',
            fontSize: '32px',
            fontWeight: '600',
            color: 'white',
            lineHeight: '120%',
            letterSpacing: '0%',
            textTransform: 'uppercase'
          }}>
            {discount}
          </div>
        )}
      </div>

      {/* Coupon Section - Right side content */}
      <div className="flex-1" style={{ 
        padding: '20px', 
        backgroundColor: '#FDF9F7',
        borderLeft: `2px solid ${color}`
      }}>
        {/* Header with logo and title (no button) */}
        <div 
          className="opacity-100"
          style={{
            marginBottom: '8px'
          }}
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <img 
              src={`/assets/${code}.png`}
              alt={`${title} logo`}
              width="24"
              height="24"
              style={{ width: '24px', height: '24px' }}
            />
            <h3 
              className="opacity-100"
              style={{
                color: '#2D2D2D',
                fontSize: '17px',
                fontWeight: '700',
                letterSpacing: 'normal',
                marginTop: '0',
                marginBottom: '0'
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Description Text */}
        <p 
          className="opacity-100"
          style={{
            color: '#666666',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1.5',
            marginTop: '0',
            marginBottom: '12px'
          }}
        >
          {description}
        </p>

        {/* Divider Line */}
        <div 
          className="opacity-100"
          style={{
            width: '100%',
            height: '0px',
            borderTop: '1px solid #E5E6E5',
            marginBottom: '12px'
          }}
        />

        {/* Read More Button */}
        <button 
          className="opacity-100"
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#7D7D7D',
            fontSize: '13px',
            fontWeight: '700',
            padding: '0',
            textAlign: 'left'
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

interface BrandOfferProps {
  brand: string;
  logo: string;
  description: string;
  discount: string;
  color: string;
  logoColor?: string;
}

function BrandOfferCard({ brand, logo, description, discount, color, logoColor = 'white' }: BrandOfferProps) {
  return (
    <div className="flex bg-white shadow-sm border border-gray-200 mb-4 overflow-hidden">
      {/* Left side - Discount */}
      <div className={`${color} text-white p-4 flex flex-col justify-center items-center min-w-[80px]`}>
        <div className="text-2xl font-bold transform -rotate-90 whitespace-nowrap">
          {discount}
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${logoColor === 'white' ? 'bg-white' : logoColor} flex items-center justify-center`}>
              <span className="text-xs font-bold">{logo}</span>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{brand}</h3>
          </div>
          <button className="text-orange-600 text-sm font-medium px-4 py-1 border border-orange-600">
            Collect
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <button className="text-gray-500 text-sm">Read more</button>
      </div>
    </div>
  );
}

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState('Coupons');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [popup, setPopup] = useState<string | null>(null);
  const couponsRef = useRef<HTMLDivElement>(null);
  const giftcardsRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  const showPopup = (message: string) => {
    setPopup(message);
    setTimeout(() => {
      setPopup(null);
    }, 2000);
  };

  const coupons = [
    {
      code: 'LONGSTAY',
      title: 'LONGSTAY',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      discount: '₹1,500',
      color: 'bg-orange-600'
    },
    {
      code: 'EARLYBIRD',
      title: 'EARLYBIRD', 
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      discount: '₹3,000',
      color: 'bg-orange-600'
    },
    {
      code: 'RUSHDEAL',
      title: 'RUSHDEAL',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      discount: 'Flat 10%',
      color: 'bg-orange-600'
    }
  ];

  const giftCardOffers = [
    {
      code: 'MYNTRA',
      title: 'MYNTRA',
      description: 'Get this gift voucher on booking above ₹2000',
      discount: '₹1500',
      color: '#D41C9B'
    },
    {
      code: 'HAMMER',
      title: 'HAMMER',
      description: 'Get this gift voucher on booking above ₹1500',
      discount: '₹1000',
      color: '#000000'
    }
  ];

  const paymentOffers = [
    {
      code: 'HDFC-logo',
      title: 'HDFC BANK',
      description: 'Get 10% off on booking above ₹1500',
      discount: '10% OFF',
      color: '#1C4E80'
    }
  ];

  // Scroll detection to highlight active tab
  useEffect(() => {
    const handleScroll = () => {
      // Don't update activeTab if we're programmatically scrolling
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + 280; // Offset for both nav bars
      
      if (couponsRef.current && giftcardsRef.current && paymentRef.current) {
        const couponsTop = couponsRef.current.offsetTop;
        const giftcardsTop = giftcardsRef.current.offsetTop;
        const paymentTop = paymentRef.current.offsetTop;
        
        if (scrollPosition >= paymentTop) {
          setActiveTab('Payment Offers');
        } else if (scrollPosition >= giftcardsTop) {
          setActiveTab('Giftcards');
        } else {
          setActiveTab('Coupons');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (tab: string) => {
    // Immediately set the active tab when clicked
    setActiveTab(tab);
    setIsScrolling(true);
    
    let targetRef;
    switch (tab) {
      case 'Coupons':
        targetRef = couponsRef;
        break;
      case 'Giftcards':
        targetRef = giftcardsRef;
        break;
      case 'Payment Offers':
        targetRef = paymentRef;
        break;
      default:
        return;
    }
    
    if (targetRef.current) {
      const headerHeight = 280; // Height of both sticky headers
      const targetPosition = targetRef.current.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Re-enable scroll detection after scrolling is complete
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust timeout based on scroll duration
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Popup */}
      {popup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black text-white px-4 py-2 rounded-md shadow-lg">
          {popup}
        </div>
      )}
      
      {/* Sticky Top Navigation */}
      <div className="sticky top-0 z-20 bg-white">
        <TopNavBar onMenuClick={() => showPopup('Menu clicked')} />
      </div>
      
      {/* Sticky Header */}
      <div className="sticky top-14 bg-white z-10 border-t border-gray-200 shadow-md">
        <div className="px-4 pt-0 pb-0">
          {/* Offers Header */}
          <h1 
            className="font-semibold opacity-100"
            style={{
              width: '345px',
              height: '28px',
              color: '#4B4E4B',
              fontSize: '24px', // heading L size
              fontWeight: '600', // SemiBold
              lineHeight: '28px', // heading L line-height
              letterSpacing: '0px', // heading L letter-spacing
              verticalAlign: 'middle',
              paddingTop: '20px',
              marginBottom: '16px'
            }}
          >
            Offers
          </h1>
          
          {/* Sign In Section */}
          {!isSignedIn ? (
            <div 
              className="bg-white mb-4 opacity-100"
              style={{
                width: '100%',
                paddingTop: '0px',
                paddingRight: '0px',
                paddingBottom: '16px',
                paddingLeft: '0px',
                gap: '12px'
              }}
            >
              <div 
                className="opacity-100"
                style={{
                  width: '100%',
                  gap: '12px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <p 
                  className="opacity-100"
                  style={{
                    width: '100%',
                    color: '#4B4E4B',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                    margin: '16px 0 12px 0'
                  }}
                >
                  Sign in to unlock exclusive additional rewards
                </p>
                <button 
                  onClick={() => setIsSignedIn(true)}
                  className="opacity-100 transition-all duration-150 ease-out active:scale-95 active:opacity-80"
                  style={{ 
                    width: '100%', 
                    height: '40px',
                    backgroundColor: '#C16B3E',
                    color: '#FFFFFF',
                    paddingTop: '8px',
                    paddingRight: '16px', 
                    paddingBottom: '8px',
                    paddingLeft: '16px',
                    gap: '6px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    touchAction: 'manipulation'
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-4" style={{ paddingTop: '24px' }}>
              <p className="text-gray-600 text-sm">Book directly with us to get exclusive benefits</p>
            </div>
          )}

          {/* Tabs */}
          <div className="flex">
            {['Coupons', 'Giftcards', 'Payment Offers'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`flex-1 py-3 text-center text-sm font-medium ${
                  activeTab === tab
                    ? 'text-gray-800 border-b-2 border-gray-800'
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Full width border line */}
        <div className="border-b border-gray-200"></div>
      </div>

      {/* Scrollable Content */}
      <div className="px-4 pt-6 pb-24">
        {/* Sitewide Coupons */}
        <div ref={couponsRef} className="mb-6">
          <h2 
            className="mb-4 opacity-100"
            style={{
              width: '345px',
              height: '24px',
              color: '#4B4E4B',
              fontSize: '18px',
              fontWeight: '600', // SemiBold 
              lineHeight: '24px',
              letterSpacing: '0px',
              verticalAlign: 'bottom'
            }}
          >
            Sitewide coupons:
          </h2>
          <div className="flex flex-col items-center w-full px-2">
            {coupons.map((coupon, index) => (
              <CouponCard key={index} {...coupon} />
            ))}
          </div>
        </div>

        {/* Bonus Gift Cards */}
        <div ref={giftcardsRef} className="mb-6">
          <h2 
            className="mb-2 opacity-100"
            style={{
              width: '345px',
              height: '24px',
              color: '#4B4E4B',
              fontSize: '18px',
              fontWeight: '600', // SemiBold 
              lineHeight: '24px',
              letterSpacing: '0px',
              verticalAlign: 'bottom'
            }}
          >
            Bonus gift cards:
          </h2>
          {isSignedIn ? (
            <div className="flex flex-col items-center w-full px-2">
              <p className="text-sm text-gray-600 mb-4">Collect multiple of these</p>
              {giftCardOffers.map((offer, index) => (
                <GiftCardCoupon key={index} {...offer} />
              ))}
            </div>
          ) : (
            <div 
              style={{
                width: '393px',
                height: '176px',
                paddingTop: '20px',
                paddingRight: '24px',
                paddingBottom: '20px',
                paddingLeft: '24px',
                gap: '16px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Gift Card SVG */}
              <div className="mb-4">
                <img 
                  src="/assets/claim-giftcard.svg" 
                  alt="Bonus gift cards - Assured vouchers up to ₹1000 of trending brands" 
                  width="345" 
                  height="100"
                  style={{ width: '345px', height: '100px' }}
                />
              </div>
              
              {/* Standard Sign In Button */}
              <button 
                onClick={() => showPopup('Gift card clicked')}
                className="transition-all duration-150 ease-out active:scale-95 active:opacity-80"
                style={{
                  width: '345px',
                  height: '40px',
                  backgroundColor: '#C16B3E',
                  color: '#FFFFFF',
                  paddingTop: '8px',
                  paddingRight: '16px',
                  paddingBottom: '8px',
                  paddingLeft: '16px',
                  gap: '6px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  touchAction: 'manipulation'
                }}
              >
                Claim gift cards »
              </button>
            </div>
          )}
        </div>

        {/* Payment Offers */}
        <div ref={paymentRef} className="mb-6 mt-12">
          <h2 
            className="mb-2 opacity-100"
            style={{
              width: '345px',
              height: '24px',
              color: '#4B4E4B',
              fontSize: '18px',
              fontWeight: '600', // SemiBold 
              lineHeight: '24px',
              letterSpacing: '0px',
              verticalAlign: 'bottom'
            }}
          >
            Payment offers:
          </h2>
          {isSignedIn ? (
            <div className="flex flex-col items-center w-full px-2">
              {paymentOffers.map((offer, index) => (
                <PaymentOfferCard key={index} {...offer} />
              ))}
            </div>
          ) : (
            <div 
              style={{
                width: '393px',
                height: '176px',
                paddingTop: '20px',
                paddingRight: '24px',
                paddingBottom: '20px',
                paddingLeft: '24px',
                gap: '16px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Payment Offers SVG */}
              <div className="mb-4">
                <img 
                  src="/assets/payment-offers.svg" 
                  alt="Payment offers - Save more on your bookings upto 15% Off on select payment methods" 
                  width="345" 
                  height="100"
                  style={{ width: '345px', height: '100px' }}
                />
              </div>
              
              {/* Standard Sign In Button */}
              <button 
                onClick={() => showPopup('Unlock offers clicked')}
                className="opacity-100 transition-all duration-150 ease-out active:scale-95 active:opacity-80"
                style={{ 
                  width: '345px', 
                  height: '40px',
                  backgroundColor: '#C16B3E',
                  color: '#FFFFFF',
                  paddingTop: '8px',
                  paddingRight: '16px', 
                  paddingBottom: '8px',
                  paddingLeft: '16px',
                  gap: '6px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  touchAction: 'manipulation'
                }}
              >
                Unlock offers »
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
