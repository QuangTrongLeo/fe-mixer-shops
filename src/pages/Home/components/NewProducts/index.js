import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import server from '~/config/server';
import "./newproducts.css";
import { useEffect, useState } from 'react';

function NewProducts() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${server}/products/all`)
            .then((response) => response.json())  // <-- Correct the function call to response.json()
            .then((data) => {
                console.log("New Products")
                console.log(data);
                if(data.msg === "Success!"){
                    setProducts(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            })

    }, []);

    // Sắp xếp theo ID từ lớn đến nhỏ và lấy 5 sản phẩm đầu tiên
    const sortedProducts = products.sort((a, b) => b.id - a.id).slice(0, 5);

    return (
        <div className="container">
            <br />
            <h2 className="text-center">Sản phẩm mới nhất</h2><br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {sortedProducts.map(product => {
                    const formattedPrice = product.price
                        ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                        : "Giá chưa có";
                    return (
                        <div className="col" key={product.id}>
                            <Link to={routesConfig.detail.replace(':productId', product.id)} className="card product-card border-0 rounded-4 shadow-sm">
                                <div className="position-relative">
                                    <div className="overflow-hidden">
                                        <img src={product.images[0] ? `http://localhost:3003${product.images[0].downloadUrl}` : 'https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png'}
                                        className="card-img-top product-image" alt={product.name} />
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h6 className="card-title mb-3" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>{product.name}</h6><hr />
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
                    )
                }
                    
                )}
            </div>
        </div>
    );
}

export default NewProducts;
