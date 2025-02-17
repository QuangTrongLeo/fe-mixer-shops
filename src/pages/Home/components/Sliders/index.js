function Sliders() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://down-bs-vn.img.susercontent.com/4245466651b3b151516679ae6cdb46c0.webp" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://down-bs-vn.img.susercontent.com/89a05cd7a53b19882b0134c5cc234f2a.webp" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://down-bs-vn.img.susercontent.com/a9df968e11ddd30902932a8c38a3385d.webp" className="d-block w-100" alt="Exotic Fruits" />
                </div>
                <div className="carousel-item">
                    <img src="https://down-bs-vn.img.susercontent.com/6f943e896e406215c51628b1a7fc0fc6.webp" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://down-bs-vn.img.susercontent.com/016292401e97380c3868b447b49acdc5.webp" className="d-block w-100" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Sliders;
