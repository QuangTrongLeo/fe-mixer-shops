import { Link } from "react-router-dom";
import "./saleproducts.css";

function SaleProducts() {
    const products = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 2,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        // Thêm các sản phẩm khác vào đây...
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
        {
            id: 3,
            name: "Premium Wireless Headphones",
            price: "299.000đ",
            images: [
                "https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp",
                "https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp",
                "https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp",
                "https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        },
    ];

    // Sắp xếp theo id từ nhỏ đến lớn và lấy tối đa 10 sản phẩm
    const sortedProducts = products.sort((a, b) => a.id - b.id).slice(0, 10);

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center">Sản phẩm đang bán</h2><br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {sortedProducts.map(product => (
                    <div key={product.id} className="col">
                        <Link to="/detail" className="card product-card border-0 rounded-4 shadow-sm">
                            <div className="position-relative">
                                <div className="overflow-hidden">
                                    <img
                                        src={product.images[0]} 
                                        className="card-img-top product-image"
                                        alt={product.name}  // Dùng tên sản phẩm làm mô tả cho alt
                                    />
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <h6 className="card-title mb-3 fw-bold">{product.name}</h6><hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="price">{product.price}</span>
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
                ))}
            </div>
            <Link to="/category" className="btn btn-outline-danger d-flex justify-content-center mx-auto w-25 see-all">Xem tất cả</Link>
        </div>
    );
}

export default SaleProducts;
