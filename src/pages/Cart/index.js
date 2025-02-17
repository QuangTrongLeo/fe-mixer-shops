import routesConfig from '~/config/routes';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './cart.css';

const Product = ({ image, name, color, size, price, quantity, onQuantityChange, onRemove }) => {
  return (
    <div className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0">
        <img src={image} className="img-fluid" style={{ width: '150px' }} alt={name} />
      </div>
      <div className="flex-grow-1 ms-3">
        <a href="#!" className="float-end" onClick={onRemove}><i className="fa-solid fa-trash text-danger"></i></a>
        <h5>{name}</h5>
        <div>Màu: {color}</div>
        <div>Kích thước: {size}</div>
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-5 pe-3">{price}$</p>
          <div className="def-number-input number-input safari_only">
            <button onClick={() => onQuantityChange(-1)} className="minus"></button>
            <input className="quantity fw-bold bg-body-tertiary text-body" min="0" value={quantity} type="number" readOnly />
            <button onClick={() => onQuantityChange(1)} className="plus"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Cart() {
  // Initial products list with data
  const initialProducts = [
    {
      id: 1,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp",
      name: "Samsung Galaxy M11 64GB",
      color: "Trắng",
      size: "L",
      price: 799,
      quantity: 1
    },
    {
      id: 2,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",
      name: "Headphones Bose 35 II",
      color: "Đỏ",
      size: "M",
      price: 239,
      quantity: 1
    },
    {
      id: 3,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp",
      name: "iPad 9.7 6-gen WiFi 32GB",
      color: "Hồng",
      size: "XXL",
      price: 659,
      quantity: 2
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleQuantityChange = (id, delta) => {
    setProducts(prev => 
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + delta) }
          : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shopping-cart" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Sản phẩm của bạn</h3>
                    {products.map(product => (
                      <Product
                        key={product.id}
                        {...product}
                        onQuantityChange={(delta) => handleQuantityChange(product.id, delta)}
                        onRemove={() => handleRemoveProduct(product.id)}
                      />
                    ))}
                    <hr className="mb-4" style={{ height: '2px', backgroundColor: '#ee2c4a', opacity: 1 }} />
                    <div className="d-flex justify-content-between p-2 mb-2 bg-danger">
                      <h5 className="fw-bold mb-0">Tổng giá:</h5>
                      <h5 className="fw-bold mb-0">{totalPrice}$</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                    <form className="mb-5">
                      <div className="form-outline mb-5">
                        <input type="text" id="typeText" className="form-control form-control-lg" value="1234 5678 9012 3457" minLength="19" maxLength="19" />
                        <label className="form-label" htmlFor="typeText">Card Number</label>
                      </div>
                      <div className="form-outline mb-5">
                        <input type="text" id="typeName" className="form-control form-control-lg" value="John Smith" />
                        <label className="form-label" htmlFor="typeName">Name on card</label>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-5">
                          <div className="form-outline">
                            <input type="text" id="typeExp" className="form-control form-control-lg" value="01/22" size="7" minLength="7" maxLength="7" />
                            <label className="form-label" htmlFor="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="form-outline">
                            <input type="password" id="typeCvv" className="form-control form-control-lg" value="***" size="1" minLength="3" maxLength="3" />
                            <label className="form-label" htmlFor="typeCvv">CVV</label>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-danger btn-block btn-lg" style={{ width: '200px' }}>
                        <i className="fa-solid fa-credit-card"></i> Mua ngay
                      </button>
                      <h5 className="mb-5" style={{ position: 'absolute', bottom: 0 }}>
                        <Link to={routesConfig.home} className="text-danger"><i className="fas fa-angle-left me-2"></i>Trở về mua hàng</Link>
                      </h5>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
