import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import routesConfig from '~/config/routes';
import server from '~/config/server';

function Search() {
    const [products, setProducts] = useState([]);
    const location = useLocation(); // Để lấy query parameters từ URL

    // Hàm để lấy query parameter "name"
    const getQueryParam = (key) => {
        const urlParams = new URLSearchParams(location.search);
        return urlParams.get(key);
    };

    const name = getQueryParam('name');
    const color = getQueryParam('color');

    useEffect(() => {

        fetch(`${server}/products/by-name-product?name=${encodeURIComponent(name)}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === "Success!") {
                    setProducts(data.data); // Cập nhật sản phẩm
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [name]);

    useEffect(() => {
        fetch(`${server}/products/by-name-product-and-color?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === "Success!") {
                    setProducts(data.data); // Cập nhật sản phẩm
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [name, color]);

    return (
        <div className="container">
            <br />
            <h2 className="text-center">Tìm kiếm sản phẩm</h2><br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {products.map((product) => {
                    const formattedPrice = product.price
                        ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                        : "Giá chưa có";
                    return (
                        <div className="col" key={product.id}>
                            <Link to={routesConfig.detail.replace(':productId', product.id)} className="card product-card border-0 rounded-4 shadow-sm">
                                <div className="position-relative">
                                    <div className="overflow-hidden">
                                        <img src={`http://localhost:3003${product.images[0] ? product.images[0].downloadUrl : ''}`}
                                            className="card-img-top product-image" alt={product.name} />
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h6 className="card-title mb-3"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >{product.name}</h6><hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="price">{formattedPrice}</span>
                                        <div className="rating">
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-half text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Search;
