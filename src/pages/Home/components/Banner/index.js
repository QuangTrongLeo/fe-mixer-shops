import React, { useEffect } from 'react';
import './banner.css';

function Banner({ marginClass = 'mx-0' }) { // You can pass a margin class prop to control the margin
  useEffect(() => {
    const items = document.querySelectorAll('.banner-item');

    // Cấu hình cho Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Thêm class 'visible' để kích hoạt animation
          entry.target.classList.add('visible');
          
          // Ngừng theo dõi phần tử này sau khi đã hiển thị
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Ngưỡng khi ít nhất 50% phần tử xuất hiện

    // Quan sát tất cả các phần tử banner-item
    items.forEach(item => observer.observe(item));

    // Cleanup observer when the component unmounts
    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="container banner-item">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6">
          <div className={`d-flex justify-content-center banner-item-left ${marginClass}`}>
            {/* <img 
              className="img-fluid" // Makes the image responsive
              src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/473105245_588463313940592_6534520691860179868_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFRf-pjljQyubbPQ6El-hG4N6zwHxfs6Z43rPAfF-zpnsJRvd5rhs7gc1escqZoV5NrCukUjU8FhDHN3btBGmtB&_nc_ohc=M6QJeOoJd0kQ7kNvgF30ooJ&_nc_oc=AdgBNw1dqI8Xdi4WEGbJcirBSXD6PBgUVfDWphHT5jGbN91ywuEVkewGVRM8r1vcLVQ&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=ApHMH8KaW7EfVrA70eVn_yJ&oh=00_AYAFE-j43PAt7ap9TNT8WFK0bebhxBcGEIOfxuPnOdgPWA&oe=67B2962B" 
              alt="" 
            /> */}
          </div>
        </div>
        
        <div className="col-12 col-md-6">
          <div className={`d-flex justify-content-center banner-item-right ${marginClass}`}>
            {/* <img 
              className="img-fluid" // Makes the image responsive
              src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/466002697_544285901691667_3909472647886645433_n.jpg?stp=cp6_dst-jpg_s720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHQBThPfzZKH8pinRuy-23FFbF23-DlyNIVsXbf4OXI0rEVzJpMqJmo19p1GN4-HIjWhrFtCD4wsTBrYaTwRwOg&_nc_ohc=lxUha8owiOsQ7kNvgEi41u5&_nc_oc=AdiogPsN82-sR4HEh6s4pbWC4tlfQ0hapvFzdz9pD5WiK-v4rg30oTeo56Ph2j3Ble0&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=AN3YL2DZFKMRThGA_bs1S39&oh=00_AYCvYE4D6m4QLYCftuwfIvZtLdVW1g2IUph28583Y4I5wA&oe=67B28A25" 
              alt="" 
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
