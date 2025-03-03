import React, { useEffect, useCallback } from "react";
import "./follow.css";

function Follow() {
    // Hàm kiểm tra xem phần tử có trong viewport không
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Hàm để thêm class 'visible' vào flip-card-inner khi phần tử vào viewport
    const handleScroll = useCallback(() => {
        const flipCards = document.querySelectorAll('.flip-card');
        flipCards.forEach((flipCard) => {
            const flipCardInner = flipCard.querySelector('.flip-card-inner');
            if (isElementInViewport(flipCard)) {
                flipCardInner.classList.add('visible');
                flipCardInner.classList.remove('hidden'); // Hiển thị khi vào viewport
            }
        });
    }, []); // Giới hạn phụ thuộc vào các giá trị không thay đổi

    // Lắng nghe sự kiện scroll và gọi hàm handleScroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); // Thêm handleScroll vào dependency array

    return (
        <div className="container py-5">
            <br />
            <h2 className="text-center">@ Theo dõi chúng tôi</h2>
            <div className="row justify-content-center align-items-stretch">
                <div className="col-md-4 d-flex mb-4">
                    <div className="flip-card mx-auto w-100">
                        <a href="https://www.facebook.com/MIXER.OTTN" target="_blank" rel="noopener noreferrer">
                            <div className="flip-card-inner hidden">
                                <div className="flip-card-front">
                                    <img
                                        src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                                        alt="Team Member"
                                        className="profile-img"
                                    />
                                    <p className="mt-3">
                                        <span className="waving-hand">👋</span> Theo dõi chúng tôi trên Facebook!
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-md-4 d-flex mb-4">
                    <div className="flip-card mx-auto w-100">
                        <a href="https://www.instagram.com/mixer.official_/" target="_blank" rel="noopener noreferrer">
                            <div className="flip-card-inner hidden">
                                <div className="flip-card-front">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/017/743/717/large_2x/instagram-icon-logo-free-png.png"
                                        alt="Team Member"
                                        className="profile-img"
                                    />
                                    <p className="mt-3">
                                        <span className="waving-hand">👋</span> Theo dõi chúng tôi trên Instagram!
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-md-4 d-flex mb-4">
                    <div className="flip-card mx-auto w-100">
                        <a href="https://www.tiktok.com/@mixer.ottn" target="_blank" rel="noopener noreferrer">
                            <div className="flip-card-inner hidden">
                                <div className="flip-card-front">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.XGOEK2DSTkZmgI9OgZ9LFwHaHa?w=640&h=640&rs=1&pid=ImgDetMain"
                                        alt="Team Member"
                                        className="profile-img"
                                    />
                                    <p className="mt-3">
                                        <span className="waving-hand">👋</span> Theo dõi chúng tôi trên Tiktok!
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Follow;
