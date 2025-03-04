import { useEffect, useState } from "react";
import "./detail.css";
import server from '~/config/server';
import { useParams } from "react-router-dom";

function Detail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [checkedColor, setCheckedColor] = useState(null);
    const [checkedSize, setCheckedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const [cartId, setCartId] = useState(null);

    useEffect(() => {
        const savedCartId = localStorage.getItem('cartId'); // Hoặc bạn có thể lấy từ sessionStorage
        if (savedCartId) {
            setCartId(savedCartId); // Cập nhật cartId từ localStorage
        } else {
            // Nếu không có cartId trong localStorage, tạo mới (có thể gửi request API để tạo cart mới)
            const newCartId = "newCartId"; // Bạn có thể thay thế bằng cách tạo cartId thực tế từ server
            setCartId(newCartId);
            localStorage.setItem('cartId', newCartId); // Lưu cartId vào localStorage
        }
    }, []);

    // Lấy dữ liệu sản phẩm từ API
    useEffect(() => {
        if (productId) {
            fetch(`${server}/products/product/${productId}`)
                .then((req) => req.json())
                .then((data) => {
                    console.log("Product:", data);
                    if (data.msg === "Success!") {
                        setProduct(data.data);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [productId]);

    // Khi dữ liệu product đã được tải, thực hiện việc chọn màu và hình ảnh
    useEffect(() => {
        if (product.colors && product.colors.length > 0) {
            // Nếu chưa có màu được chọn, chọn màu đầu tiên
            if (!checkedColor) {
                const firstColor = product.colors[0];
                setCheckedColor(firstColor.id);
            }
        }

        if (product.images && product.images.length > 0) {
            setMainImage(`http://localhost:3003${product.images[0].downloadUrl}`);
        }
    }, [product, checkedColor]);

    // useEffect này sẽ chạy khi checkedColor thay đổi, tự động chọn kích thước đầu tiên của màu được chọn
    useEffect(() => {
        if (product.colors && checkedColor) {
            const selectedColor = product.colors.find(color => color.id === checkedColor);
            if (selectedColor && selectedColor.sizes && selectedColor.sizes.length > 0) {
                // Nếu màu có kích thước, chọn kích thước đầu tiên
                setCheckedSize(selectedColor.sizes[0].id);
            } else {
                // Nếu màu không có kích thước, đặt checkedSize thành null
                setCheckedSize(null);
            }
        }
    }, [checkedColor, product]);

    // Chức năng thay đổi hình ảnh chính
    const changeImage = (src) => {
        setMainImage(`http://localhost:3003${src}`);
    };

    // Xử lý thay đổi số lượng
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const addToCart = () => {
        if (!checkedColor || !checkedSize || !quantity) {
            alert("Vui lòng lựa chọn màu, size và số lượng đầy đủ!");
            return;
        }

        const cartItemData = {
            cartId: cartId || null,
            productId: productId,
            colorId: checkedColor,
            sizeId: checkedSize,
            quantity: quantity
        }

        fetch(`${server}/cart-items/item/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItemData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === "Success!") {
                    alert("Thêm sản phẩm thành công vào giỏ hàng");
                } else {
                    alert("Thêm sản phẩm vào giỏ hàng thất bại")
                }
            })
            .catch((err) => {
                console.error("Error adding item to cart:", err);
                alert("Error adding item to cart.");
            });
    }

    // Render các lựa chọn màu sắc
    const renderColorOptions = () => {
        if (!product.colors) return null;
        return product.colors.map(color => (
            <div key={color.id} className="color-option" style={{ display: 'inline-block', marginRight: '10px' }}>
                <input
                    type="radio"
                    className="btn-check"
                    name="color"
                    id={`color-${color.id}`}
                    checked={checkedColor === color.id}
                    onChange={() => {
                        setCheckedColor(color.id);
                    }}
                    style={{ display: 'none' }}
                />
                <label
                    htmlFor={`color-${color.id}`}
                    className={`color-label ${checkedColor === color.id ? 'selected' : ''}`}
                    style={{
                        backgroundColor: `#${color.hexCode}`,
                    }}
                />
            </div>
        ));
    };

    // Render các lựa chọn kích thước dựa trên màu sắc đã chọn
    const renderSizeOptions = () => {
        const selectedColor = product.colors.find(color => color.id === checkedColor);
        if (!selectedColor || !selectedColor.sizes) return null;
        return selectedColor.sizes.map((size) => (
            <div key={size.id} className="size-option">
                <input
                    type="radio"
                    className="btn-check"
                    name="size"
                    id={`size${size.id}`}
                    checked={checkedSize === size.id}
                    onChange={() => {
                        setCheckedSize(size.id);
                    }}
                    style={{ display: 'none' }}
                />
                <label
                    htmlFor={`size${size.id}`}
                    className={`btn me-3 ${checkedSize === size.id ? 'selected' : ''}`}
                >
                    {size.name}
                </label>
            </div>
        ));
    };

    useEffect(() => {
        console.log('Thông tin sản phẩm được cập nhật:');
        console.log('Product ID:', productId);
        console.log('Checked Color ID:', checkedColor);
        console.log('Checked Size ID:', checkedSize);
        console.log('Quantity:', quantity);
        console.log('');
    }, [productId, checkedColor, checkedSize, quantity]);

    // Fallback giá trị cho price
    const formattedPrice = product.price
        ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
        : "Giá chưa có";

    // Kiểm tra nếu dữ liệu chưa được tải
    if (!product || !product.images || !product.colors) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {/* Hình ảnh chính */}
                    <img
                        src={mainImage || 'https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png'}
                        alt={product.name}
                        style={{ maxWidth: '360px', display: 'block', margin: '0 auto' }}
                        className="img-fluid rounded mb-3 product-detail-image"
                        id="mainImage"
                    />
                    {/* Thumbnails */}
                    <div className="d-flex justify-content-evenly image-gallery">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={`http://localhost:3003${image.downloadUrl}`}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail rounded"
                                onClick={() => changeImage(image.downloadUrl)}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className="mb-3">{product.name}</h2>
                    <p className="mb-4">Thể loại: {product.category ? product.category.name : "Unknown"}</p>
                    <div className="mb-3">
                        <span className="h5 me-2 text-danger">{formattedPrice}</span>
                    </div>
                    <div className="mb-3">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                    </div>

                    {/* Màu sắc */}
                    <div className="mb-4">
                        <h6>Màu:</h6>
                        <div className="btn-group" role="group">
                            {renderColorOptions()}
                        </div>
                    </div>

                    {/* Kích thước */}
                    <div className="mb-4">
                        <h6>Kích thước:</h6>
                        <div className="btn-group" role="group">
                            {renderSizeOptions()}
                        </div>
                    </div>

                    {/* Số lượng */}
                    <h6 htmlFor="quantity" className="form-label">Số lượng:</h6>
                    <div className="d-flex justify-content-between">
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            value={quantity}
                            min="1"
                            onChange={handleQuantityChange}
                            style={{ width: "120px" }}
                        />
                        <button className="btn btn-danger mb-3 me-2" style={{ width: "260px" }} onClick={addToCart}>
                            <i className="bi bi-cart-plus"></i> Thêm vào giỏ hàng
                        </button>
                    </div>

                    {/* Số lượng kho */}
                    <div className="d-flex align-items-left">
                        <h6 className="form-label m-0">Kho hàng có sẵn: </h6>
                        <span className="m-0 ms-2">
                            {checkedColor ? 
                                // Tìm màu đã chọn trong mảng colors
                                (product.colors.find(color => color.id === checkedColor) ? 
                                    // Tìm trong size của màu đó
                                    (product.colors.find(color => color.id === checkedColor).sizes.find(size => size.id === checkedSize) ?
                                        // Nếu có size thì lấy inventory
                                        product.colors.find(color => color.id === checkedColor).sizes.find(size => size.id === checkedSize).inventory
                                        : 'Không có') 
                                    : 'Không có'
                                ) 
                            : 'Không có'} sản phẩm
                        </span>

                        
                    </div>
                    <hr />

                    <p>Hotline: <a className="link" href="tel:0822221992">0822221992</a> (7:30 - 22:00)</p>

                    {/* Chính sách sản phẩm */}
                    <ul className="product-policises list-unstyled py-sm-3 px-sm-3 m-0">
                        <li className="media">
                            <img className="img-fluid" width="24" height="24" src="//theme.hstatic.net/200000881795/1001243022/14/policy_product_image_1.png?v=152" alt="Giao hàng toàn quốc" />
                            <div>Giao hàng toàn quốc</div>
                        </li>
                        <li className="media">
                            <img className="img-fluid" width="24" height="24" src="//theme.hstatic.net/200000881795/1001243022/14/policy_product_image_2.png?v=152" alt="Ưu đãi hấp dẫn" />
                            <div>Ưu đãi hấp dẫn</div>
                        </li>
                        <li className="media">
                            <img className="img-fluid" width="24" height="24" src="//theme.hstatic.net/200000881795/1001243022/14/policy_product_image_3.png?v=152" alt="Sản phẩm chính hãng" />
                            <div>Sản phẩm chính hãng</div>
                        </li>
                    </ul>
                    <hr />

                    {/* Khuyến mãi - Ưu đãi */}
                    <div className="mt-4">
                        <h5 className="text-danger"><i className="fa-solid fa-gift"></i> Khuyến mãi - Ưu đãi:</h5>
                        <ul>
                            <li>Chuyển khoản với đơn hàng từ 500k trở lên (Bắt buộc)</li>
                            <li>Hỗ trợ trả lời thắc mắc qua fanpage chính thức</li>
                            <li>Khuyến mãi trực tiếp trên giá sản phẩm</li>
                            <li>Đổi trả nếu sản phẩm lỗi bất kỳ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
