import React, { useEffect, useRef } from 'react';
import './introduce.css';

function Introduce() {
  // Sử dụng useRef để tham chiếu tới các phần tử DOM
  const introduceItemRef = useRef(null);
  const videoRef = useRef(null); // Tham chiếu tới phần tử video

  useEffect(() => {
    // Cấu hình cho Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Thêm lớp 'visible' khi phần tử xuất hiện trên màn hình
          entry.target.classList.add('visible');

          // Nếu video xuất hiện, phát video
          if (videoRef.current) {
            videoRef.current.play();
          }

          observer.unobserve(entry.target); // Ngừng theo dõi phần tử này sau khi đã hiển thị
        }
      });
    }, { threshold: 0.5 }); // Ngưỡng là khi ít nhất 50% phần tử xuất hiện trên màn hình

    // Quan sát phần tử introduce-item
    if (introduceItemRef.current) observer.observe(introduceItemRef.current);

    // Cleanup: Ngừng quan sát khi component bị unmount
    return () => {
      if (introduceItemRef.current) observer.unobserve(introduceItemRef.current);
    };
  }, []); // Chạy 1 lần khi component render

  return (
    <div className="container introduce-item" ref={introduceItemRef}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="introduce-video">
            <video
              ref={videoRef} // Tham chiếu tới video
              data-dashjs-player="true"
              controls
              className="Il2_lB"
              webkit-playsinline="webkit-playsinline"
              src="https://cvf.shopee.vn/file/57c509e5c882e5a4913936ca8bdad4c9"
              muted
              loop
              autoPlay={false}
              width="100%"
              height="400"
            ></video>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="introduce-info text-center">
            <h2 className="text-white introduce-info-title">Mixer Shop</h2><br/>
            <p className="text-white introduce-info-desc">
              Shop quần áo Mixer cung cấp các sản phẩm thời trang năng động và phong cách, phù hợp với giới trẻ yêu thích sự kết hợp giữa các xu hướng hiện đại và cá tính riêng. Mixer hướng đến những khách hàng tìm kiếm sự đa dạng trong lựa chọn, có thể mix&match dễ dàng để tạo ra những outfit độc đáo. Chất liệu quần áo thường đảm bảo độ bền cao và thiết kế thời trang, mang lại sự thoải mái cho người mặc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;


