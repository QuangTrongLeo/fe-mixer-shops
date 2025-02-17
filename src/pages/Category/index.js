import { Link } from 'react-router-dom';

function Category() {
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
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
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
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
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
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp",
                "https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp"
            ]
        }
    ];

    return (
        <div className="container">
            <br />
            <h2 className="text-center">Danh mục sản phẩm</h2><br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <Link to="" className="card product-card border-0 rounded-4 shadow-sm">
                            <div className="position-relative">
                                <div className="overflow-hidden">
                                    <img src={product.images[0]} className="card-img-top product-image" alt={product.name} />
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
        </div>
    );
}

export default Category;
