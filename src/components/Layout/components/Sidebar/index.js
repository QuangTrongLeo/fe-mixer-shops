import { Link } from 'react-router-dom';
import './sidebar.css';
import server from '~/config/server';
import { useState, useEffect } from 'react';

function Sidebar() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        // Fetch dữ liệu từ API
        fetch(`${server}/colors/all`)
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === "Success!") {
                    // Loại bỏ màu trùng lặp bằng cách sử dụng Set
                    const uniqueColors = [];
                    const colorSet = new Set();

                    data.data.forEach((color) => {
                        if (!colorSet.has(color.hexCode)) {
                            colorSet.add(color.hexCode);
                            uniqueColors.push(color);
                        }
                    });

                    setColors(uniqueColors); // Cập nhật state
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <div>
            <br />
            <h3 className="text-center">Menu</h3>

            {/* Mục Màu có dropdown */}
            <a href="#colorDropdown" data-bs-toggle="collapse" aria-expanded="false" aria-controls="colorDropdown">
                Màu <i className="fas fa-chevron-down"></i>
            </a>
            <div className="collapse" id="colorDropdown">
                {colors.map((color) => (
                    <Link to="#" key={color.id}>
                        <span className="color-circle" style={{ backgroundColor: `#${color.hexCode}` }}></span>
                        <span className="link-text">{color.name}</span>
                    </Link>
                ))}
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
