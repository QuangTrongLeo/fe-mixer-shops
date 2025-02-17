import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  return (
    <section className="p-3 p-md-4 p-xl-6">
      <div className="container  w-75 mx-auto">
        <div className="card card-shadow">
          <div className="row g-0">
            {/* <div className="col-12 col-md-6">
              <img
                className="img-fluid rounded-start w-100 h-90 object-fit-cover"
                loading="lazy"
                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=dst-jpg_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2285d6&_nc_ohc=5xtd3Ajg0qYQ7kNvgFVk-BS&_nc_oc=Adi_T82wwYUcj_KBQ63YKeq6Fs3oncIOfkver1RN3Bu3VibTYaKVVw7oNXpXAvqSYS4&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=ABXgFWCETK9hMSZ20O3YbVO&oh=00_AYDDnRuQc_vbmzkHBV2kMdf1DAiPTXOTe2T2Je5Z-YfDUg&oe=67AEAC54"
                alt="BootstrapBrain Logo"
              />
            </div> */}
            <div className="col-12 col-md-12">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-6">
                      <h2 className="h3 text-center">Đăng ký</h2>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="firstName" className="form-label">
                        Họ <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder="Vui lòng nhập họ ..."
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="lastName" className="form-label">
                        Tên <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        placeholder="Vui lòng nhập tên ..."
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Mật khẩu <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Vui lòng nhập mật khẩu ..."
                        required
                      />
                      
                    </div>
                    <div className="col-12">
                      <label htmlFor="confirmPassword" className="form-label">
                        Nhập lại mật khẩu <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Vui lòng nhập lại mật khẩu ..."
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-sm btn-danger" type="submit">
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">
                      Bạn đã có tài khoản?{' '}
                      <Link to="/login" className="link-primary text-danger text-decoration-none">
                        Đăng nhập
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="text-center">Hoặc đăng nhập với:</p>
                    <div className="d-flex gap-3 justify-content-center flex-column flex-xl-row">
                      <a href="#!" className="btn bsb-btn-xl btn-outline-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-google"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        <span className="ms-2 fs-6">Google</span>
                      </a>
                      <a href="#!" className="btn bsb-btn-xl btn-outline-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <span className="ms-2 fs-6">Facebook</span>
                      </a>
                    </div>
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

export default Register;
