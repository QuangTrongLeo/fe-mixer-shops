import { Link } from "react-router-dom";
import routesConfig from '~/config/routes';
import "./saleproducts.css";
import { useEffect, useState } from "react";

function SaleProducts() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3003/api/mixer-shops/products/all')
            .then((req) => req.json())
            .then((data) => {
                console.log("Sale Products");
                console.log(data);
                if (data.msg === "Success!") {
                    setProducts(data.data);
                }
            })
    }, []);

    // Sắp xếp theo id từ nhỏ đến lớn và lấy tối đa 10 sản phẩm
    const sortedProducts = products.sort((a, b) => a.id - b.id).slice(0, 10);

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center">Sản phẩm đang bán</h2><br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {sortedProducts.map((product, index) => {
                    const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price);
                    return (
                        <div key={product.id + '-' + index} className="col">
                            <Link to="/detail" className="card product-card border-0 rounded-4 shadow-sm">
                                <div className="position-relative">
                                    <div className="overflow-hidden">
                                        <img
                                            src={product.images[0] ? `http://localhost:3003${product.images[0].downloadUrl}` : 'https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png'} 
                                            className="card-img-top product-image"
                                            alt={product.name}  // Dùng tên sản phẩm làm mô tả cho alt
                                        />
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
                                        <span className="price">{formattedPrice}đ</span>
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
                })}
            </div>
            <Link to={routesConfig.products} className="btn btn-outline-danger d-flex justify-content-center mx-auto w-25 see-all">Xem tất cả</Link>
        </div>
    );
}

export default SaleProducts;
