import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import './header.css';

function Header() {
  // Giả lập currentUser
  // const currentUser = { name: "Admin", role: 1 };
  const currentUser = null;

  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0 w-100" style={{ zIndex: 10, backgroundColor: 'white' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to={routesConfig.home}>
          <img src="https://down-bs-vn.img.susercontent.com/vn-11134216-7r98o-lo56qypttoqzca_tn.webp" alt="Mixer Shop" style={{ width: '50px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={routesConfig.home}>Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routesConfig.introduce}>Giới thiệu</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sản phẩm
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Áo khoác Bomber</Link></li>
                <li><Link className="dropdown-item" to="#">Áo Hoodie</Link></li>
                <li><Link className="dropdown-item" to="#">Áo Sweater</Link></li>
                <li><Link className="dropdown-item" to="#">Áo nỉ</Link></li>
                <li><Link className="dropdown-item" to="#">Áo thun</Link></li>
                <li><Link className="dropdown-item" to="#">Quần Short</Link></li>
                <li><Link className="dropdown-item" to="#">Quần dài</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routesConfig.contact}>Liên hệ</Link>
            </li>
          </ul>
          <form className="d-flex mx-auto" role="search">
            <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Kiểm tra nếu không có currentUser (Customer) */}
            {currentUser === null ? (
              // Customer
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-circle-user icon-size"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={routesConfig.login}>Đăng nhập</Link></li>
                  <li><Link className="dropdown-item" to={routesConfig.register}>Đăng ký</Link></li>
                </ul>
              </li>
            ) : currentUser.role === 1 ? (
              // User
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-circle-user icon-size"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={routesConfig.profile}>Trang cá nhân</Link></li>
                  <li><Link className="dropdown-item" to={routesConfig.order}>Đơn hàng</Link></li>
                  <li><Link className="dropdown-item" to={routesConfig.home}>Đăng xuất</Link></li>
                </ul>
              </li>
            ) : currentUser.role === 0 ? (
              // Admin
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-circle-user icon-size"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={routesConfig.profile}>Trang cá nhân</Link></li>
                  <li><Link className="dropdown-item" to={routesConfig.manager}>Quản lý sản phẩm</Link></li>
                  <li><Link className="dropdown-item" to={routesConfig.home}>Đăng xuất</Link></li>
                </ul>
              </li>
            ) : null}
            <li className="nav-item">
              <Link className="nav-link" to={routesConfig.cart}><i className="fa-solid fa-cart-shopping icon-size"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
