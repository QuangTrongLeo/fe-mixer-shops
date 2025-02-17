import React, { useState } from 'react';
import "./order.css";

function Order() {
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Mảng chứa các đơn hàng với orderId
    const orders = [
        {
            productId: 1,
            name: "The Old From The New",
            price: "500.000 vnđ",
            color: "Đen",
            size: "M",
            quantity: "10",
            telephone: "0865417145",
            address: "Cư xá C, đại học Nông Lâm",
            status: "Đang vận chuyển",
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
            productId: 2,
            name: "Áo khoác Bomber 'MIXER Swan'",
            price: "600.000 vnđ",
            color: "Đen",
            size: "M",
            quantity: "10",
            telephone: "0865417145",
            address: "Cư xá C, đại học Nông Lâm",
            status: "Đang vận chuyển",
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3w3u8qn9q5k83@resize_w900_nl.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3w3u8qn9q5k83@resize_w900_nl.webp"
            ]
        }
    ];

    // Hàm để hiển thị chi tiết đơn hàng
    const showOrderDetails = (productId) => {
        const order = orders.find(o => o.productId === productId);
        setSelectedOrder(order);  // Cập nhật trạng thái với đơn hàng đã chọn
    };

    // Hàm đóng form chi tiết
    const closeForm = () => {
        setSelectedOrder(null); // Đóng form chi tiết
    };

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng giá</th>
                        <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.productId} onClick={() => showOrderDetails(order.productId)}>
                            <th scope="row">{order.productId}</th>
                            <td>
                                <img
                                    src={order.images[0]}
                                    alt="Product"
                                    width="80px"
                                />
                            </td>
                            <td>
                                <div><h6>{order.name}</h6></div>
                                <div>Giá: {order.price}</div>
                                <div>Màu: {order.color}</div>
                                <div>Kích thước: {order.size}</div>
                            </td>
                            <td>x{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
            {/* Hiển thị form chi tiết sản phẩm nếu có đơn hàng được chọn */}
            {selectedOrder && (
                <>
                    <div
                        className="overlay show"
                        onClick={closeForm}
                    ></div>
    
                    <div className="product-order-details-form show container">
                        <h3>Thông tin chi tiết sản phẩm</h3>
                        <form>
                            <div className="product-images d-flex">
                                {selectedOrder && selectedOrder.images && selectedOrder.images.length > 0 && selectedOrder.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail rounded"
                                    />
                                ))}
                            </div>

                            <br/>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Tên sản phẩm: </span>
                                <span>{selectedOrder.name}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Giá: </span>
                                <span>{selectedOrder.price}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Màu: </span>
                                <span>{selectedOrder.color}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Kích thước: </span>
                                <span>{selectedOrder.size}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Số lượng: </span>
                                <span>{selectedOrder.quantity}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Tổng giá: </span>
                                <span>{selectedOrder.price}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Số điện thoại: </span>
                                <span>{selectedOrder.telephone}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Địa chỉ: </span>
                                <span>{selectedOrder.address}</span>
                            </div>
                            <div className="mb-3 product-order-details">
                                <span className="form-label">Trạng thái: </span>
                                <span>{selectedOrder.status}</span>
                            </div>
                        </form>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={closeForm}
                        >
                            Đóng
                        </button>
                    </div>
                </>
            )}
        </div>
    );    
}

export default Order;
