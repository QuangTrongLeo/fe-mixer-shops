import { Link } from 'react-router-dom';
import './sidebar.css';
import server from '~/config/server';
import routeConfigs from '~/config/routes';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Sidebar() {
    const { categoryName } = useParams(); // Lấy categoryName từ URL
    const [colors, setColors] = useState([]); // Mảng lưu trữ các màu

    useEffect(() => {
        // Fetch dữ liệu màu từ API
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

                    setColors(uniqueColors); // Cập nhật state với màu duy nhất
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []); // Chạy 1 lần khi component mount

    return (
        <div>
            <br />
            <h3 className="text-center">
                {categoryName ? (
                    <Link to={routeConfigs.category.replace(':categoryName', categoryName)}>Menu</Link>
                ) : (
                    <Link to={routeConfigs.products}>Menu</Link>
                )}
            </h3>

            {/* Mục Màu có dropdown */}
            <a href="#colorDropdown" data-bs-toggle="collapse" aria-expanded="false" aria-controls="colorDropdown">
                Màu <i className="fas fa-chevron-down"></i>
            </a>
            <div className="collapse" id="colorDropdown">
                {colors.map((color) => {
                    const linkTo = categoryName 
                        ? `${routeConfigs.category.replace(':categoryName', categoryName)}?color=${color.name}` 
                        : `${routeConfigs.products}?color=${color.name}`;
                
                    return (
                        <Link to={linkTo} key={color.id}>
                            <span className="color-circle" style={{ backgroundColor: `#${color.hexCode}` }}></span>
                            <span className="link-text">{color.name}</span>
                        </Link>
                    );
                    }
                )}
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
