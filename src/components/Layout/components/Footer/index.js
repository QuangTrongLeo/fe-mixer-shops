import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import './footer.css';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: 'var(--footer-background-color)' }}>
      {/* Section: Links */}
      <section className="d-flex justify-content-between p-4">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Liên hệ</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <p>Địa chỉ: Yên Lãng, Hà Nội</p>
              <p>
                Số điện thoại:{' '}
                <a className="link text-decoration-none" title="0916660110" href="tel:0916660110">
                0916660110
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  title="Mixiishop@gmail.com"
                  className="link text-decoration-none"
                  href="mailto:Mixiishop@gmail.com"
                >
                  Mixiishop@gmail.com
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Chính sách</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: 'var(--footer-liner-color)', height: '2px' }}
              />
              <p>
                <Link to={routesConfig.home} className="text-white text-decoration-none text-link">
                  Trang chủ
                </Link>
              </p>
              <p>
                <Link to={routesConfig.introduce} className="text-white text-decoration-none text-link">
                  Giới thiệu
                </Link>
              </p>
              <p>
                <Link to={routesConfig.contact} className="text-white text-decoration-none text-link">
                  Liên hệ
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Hỗ trợ khách hàng</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: 'var(--footer-primary-color)', height: '2px' }}
              />
              <p>
                <Link to={routesConfig.policy} className="text-white text-decoration-none text-link">
                  Chính sách bảo mật
                </Link>
              </p>
              <p>
                <Link to={routesConfig.terms} className="text-white text-decoration-none text-link">
                  Điều khoản dịch vụ
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Kết nối</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <p>
                <a href="https://www.facebook.com/MIXER.OTTN" className="text-white text-decoration-none text-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i> Facebook
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/mixer.official_/" className="text-white text-decoration-none text-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram"></i> Instagram
                </a>
              </p>
              <p>
                <a href="https://www.tiktok.com/@mixer.ottn" className="text-white text-decoration-none text-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-tiktok"></i> Tiktok
                </a>
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-12 mb-4"></div>
          <div className="col-lg-3 col-md-12 col-12 mb-4">
            <img src="https://theme.hstatic.net/200000881795/1001243022/14/logo_bct.png?v=152" alt="Logo" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-12 col-12 mb-4">
            <img src="https://theme.hstatic.net/200000881795/1001243022/14/footer_trustbadge.png?v=152" alt="Trust Badge" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-12 col-12 mb-4"></div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025 Copyright
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
