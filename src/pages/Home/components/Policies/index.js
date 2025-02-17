import React, { useEffect } from "react";
import "./policies.css";

function Policies() {
  useEffect(() => {
    const items = document.querySelectorAll('.policies-item');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-6 mb-4">
          <div className="policies-item d-flex">
            <div className="policies-image">
              <img 
                src="//theme.hstatic.net/200000881795/1001243022/14/policies_icon_1.png?v=152" 
                alt="policies_icon_1.png" 
                width="40" 
                height="40" 
                className="img-fluid" 
              />
            </div>
            <div className="policies-info">
              <div className="policies-title font-weight-bold">Vận chuyển toàn quốc</div>
              <div className="policies-desc text-muted">Vận chuyển nhanh chóng</div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-6 mb-4">
          <div className="policies-item d-flex">
            <div className="policies-image">
              <img 
                src="//theme.hstatic.net/200000881795/1001243022/14/policies_icon_2.png?v=152" 
                alt="policies_icon_2.png" 
                width="40" 
                height="40" 
                className="img-fluid" 
              />
            </div>
            <div className="policies-info">
              <div className="policies-title font-weight-bold">Ưu đãi hấp dẫn</div>
              <div className="policies-desc text-muted">Nhiều ưu đãi khuyến mãi hot</div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-6 mb-4">
          <div className="policies-item d-flex">
            <div className="policies-image">
              <img 
                src="//theme.hstatic.net/200000881795/1001243022/14/policies_icon_3.png?v=152" 
                alt="policies_icon_3.png" 
                width="40" 
                height="40" 
                className="img-fluid" 
              />
            </div>
            <div className="policies-info">
              <div className="policies-title font-weight-bold">Bảo đảm chất lượng</div>
              <div className="policies-desc text-muted">Sản phẩm đã được kiểm định</div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-6 mb-4">
          <div className="policies-item d-flex">
            <div className="policies-image">
              <img 
                src="//theme.hstatic.net/200000881795/1001243022/14/policies_icon_4.png?v=152" 
                alt="policies_icon_4.png" 
                width="40" 
                height="40" 
                className="img-fluid" 
              />
            </div>
            <div className="policies-info">
              <div className="policies-title font-weight-bold">Hotline: 0916660110</div>
              <div className="policies-desc text-muted">Vui lòng gọi hotline để hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;
