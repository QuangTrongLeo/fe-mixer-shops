import { useState } from "react";
import "./detail.css";

function Detail() {
    // State quản lý lựa chọn màu sắc, kích thước và số lượng
    const [checkedColor, setCheckedColor] = useState('Đen'); // Mặc định là màu Đen
    const [checkedSize, setCheckedSize] = useState('size1');
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: 1,
        name: "Premium Wireless Headphones",
        price: "299.000đ",
        images: [
            "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
            "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
            "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
            "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
            "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
            "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
            "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
        ],
        colors: [
            {
                id: 1,
                nameColor: 'Đen',
                hexCode: '000000'
            },
            {
                id: 2,
                nameColor: 'Trắng',
                hexCode: 'FFFFFF'
            },
            {
                id: 3,
                nameColor: 'Lam',
                hexCode: '0000FF'
            }
        ],
        sizes: [
            {
                id: 1,
                sizeName: 'S'
            },
            {
                id: 2,
                sizeName: 'M'
            },
            {
                id: 3,
                sizeName: 'L'
            }
        ]
    };

    // Hàm thay đổi ảnh khi người dùng chọn thumbnail
    const changeImage = (src) => {
        document.getElementById('mainImage').src = src;
    };

    // Hàm thay đổi số lượng sản phẩm
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };


    // Hàm render lựa chọn màu sắc
    const renderColorOptions = () => {
        return product.colors.map(color => (
            <div key={color.id} className="color-option" style={{ display: 'inline-block', marginRight: '10px' }}>
                <input
                    type="radio"
                    className="btn-check"
                    name="color"
                    id={color.nameColor}
                    checked={checkedColor === color.nameColor}
                    onChange={() => setCheckedColor(color.nameColor)}
                    style={{ display: 'none' }}
                />
                <label
                    htmlFor={color.nameColor}
                    className={`color-label ${color.nameColor.toLowerCase()} ${checkedColor === color.nameColor ? 'selected' : ''}`}
                    style={{
                        backgroundColor: `#${color.hexCode}`,
                    }}
                />
            </div>
        ));
    };

    // Hàm render lựa chọn kích thước
    // Hàm render lựa chọn kích thước
    const renderSizeOptions = () => {
        return product.sizes.map((size) => (
            <div key={size.id} className="size-option">
                <input
                    type="radio"
                    className="btn-check"
                    name="size"
                    id={`size${size.id}`}
                    checked={checkedSize === `size${size.id}`}
                    onChange={() => setCheckedSize(`size${size.id}`)}
                    style={{ display: 'none' }}
                />
                <label
                    htmlFor={`size${size.id}`}
                    className={`btn me-3 ${checkedSize === `size${size.id}` ? 'selected' : ''}`}
                >
                    {size.sizeName}
                </label>
            </div>
        ));
    };


    return (
        <div className="container mt-5">
            <div className="row">
                {/* Product Images */}
                <div className="col-md-6">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="img-fluid rounded mb-3 product-detail-image"
                        id="mainImage"
                    />
                    <div className="d-flex  justify-content-evenly image-gallery">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail rounded"
                                onClick={() => changeImage(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h2 className="mb-3">{product.name}</h2>
                    <p className="mb-4">Thể loại: WH1000XM4</p>
                    <div className="mb-3">
                        <span className="h5 me-2 text-danger">{product.price}</span>
                    </div>
                    <div className="mb-3">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                    </div>

                    <div className="mb-4">
                        <h6>Màu:</h6>
                        <div className="btn-group" role="group">
                            {renderColorOptions()}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h6>Kích thước:</h6>
                        <div className="btn-group" role="group">
                            {renderSizeOptions()}
                        </div>
                    </div>

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
                        <button className="btn btn-danger mb-3 me-2" style={{ width: "260px" }}>
                            <i className="bi bi-cart-plus"></i> Thêm vào giỏ hàng
                        </button>
                    </div>

                    <div className="d-flex align-items-left">
                        <h6 className="form-label m-0">Kho hàng có sẵn: </h6>
                        <span className="m-0 ms-2">1000 sản phẩm</span>
                    </div>
                    <hr />

                    <p>Hotline: <a className="link" href="tel:0822221992">0822221992</a> (7:30 - 22:00)</p>

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
