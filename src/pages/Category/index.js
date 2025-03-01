import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import routesConfig from '~/config/routes';
import server from '~/config/server';
import { Link } from 'react-router-dom';

function Category() {
    const { categoryName } = useParams();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [isNoProducts, setIsNoProducts] = useState(false);  // Trạng thái kiểm tra có sản phẩm hay không

    const queryParams = new URLSearchParams(location.search);
    const colorName = queryParams.get('color');

    useEffect(() => {
        let apiUrl = `${server}/products/by-name/${categoryName}/category`;

        if (colorName) {
            apiUrl = `${server}/products/by/${categoryName}/category?color=${colorName}`;
        }

        fetch(apiUrl)
            .then((req) => req.json())
            .then((data) => {
                console.log("All Products:");
                console.log(data);
                // Kiểm tra xem API trả về dữ liệu hợp lệ và có sản phẩm hay không
                if (data && data.msg === "Success!") {
                    if (!data.data || data.data.length === 0) {
                        setIsNoProducts(true);  // Nếu không có sản phẩm, hiển thị thông báo
                    } else {
                        setIsNoProducts(false);  // Nếu có sản phẩm, không hiển thị thông báo
                        setProducts(data.data);
                    }
                } else {
                    setIsNoProducts(true);  // Nếu không có phản hồi hợp lệ từ API, hiển thị thông báo
                }
            })
            .catch((err) => {
                console.error(err);
                setIsNoProducts(true);  // Nếu có lỗi trong quá trình fetch, hiển thị thông báo
            });
    }, [categoryName, colorName]);

    return (
        <div className="container">
            <br />
            <h2 className="text-center">Các sản phẩm về {categoryName}</h2><br />
            {isNoProducts ? (
                <div className="text-center">
                    <br></br>
                    <h4>Hiện tại không có sản phẩm</h4>
                    <Link to={routesConfig.category.replace(':categoryName', categoryName)} className='btn btn-outline-danger'><i class="fa-solid fa-chevron-left"></i> Tiếp tục mua hàng</Link>
                </div>
            ) : (
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
                                            <img
                                                src={product.images[0] ? `http://localhost:3003${product.images[0].downloadUrl}` : 'https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png'}
                                                className="card-img-top product-image" alt={product.name}
                                            />
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
            )}
        </div>
    );
}

export default Category;
