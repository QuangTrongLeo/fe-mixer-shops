import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div>
            <br />
            <h3 className="text-center">Menu</h3>
            
            {/* Mục Màu có dropdown */}
            <a href="#colorDropdown" data-bs-toggle="collapse" aria-expanded="false" aria-controls="colorDropdown">
                Màu <i className="fas fa-chevron-down"></i>
            </a>
            <div className="collapse" id="colorDropdown">
                <Link to="#">Đỏ</Link>
                <Link to="#">Xanh</Link>
                <Link to="#">Vàng</Link>
                <Link to="#">Tím</Link>
                <Link to="#">Xám</Link>
            </div>
            
            {/* Mục Giá cả có dropdown */}
            <a href="#priceDropdown" data-bs-toggle="collapse" aria-expanded="false" aria-controls="priceDropdown">
                Giá cả <i className="fas fa-chevron-down"></i>
            </a>
            <div className="collapse" id="priceDropdown">
                <Link to="#">100.000vnđ - 200.000vnđ</Link>
                <Link to="#">200.000vnđ - 300.000vnđ</Link>
                <Link to="#">300.000vnđ - 400.000vnđ</Link>
                <Link to="#">400.000vnđ - 500.000vnđ</Link>
            </div>
        </div>
    );
}

export default Sidebar;
