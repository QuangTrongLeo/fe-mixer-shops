import React, { useState, useEffect } from 'react';

function ButtonScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hàm để cuộn lên trên khi click vào nút
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lắng nghe sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '8%',
        right: '4%',
        zIndex: 100,
        display: isVisible ? 'block' : 'none',
        padding: '10px 16px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#4C4C4C',
        color: 'white',
      }}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-angles-up"></i>
    </button>

  );
}

export default ButtonScrollTop;
