function Contact() {
    return (
        <section className="p-3 p-md-4 p-xl-5">
            <div className="container">
                <div className="card card-shadow">
                    <div className="row g-0">
                        <div className="col-12 col-md-6">
                            <br /><br /><br />
                            <h2 className="text-center">Mixer Shop liên hệ</h2>
                            <hr />
                            <ul>
                                <li>Địa chỉ: Yên Lãng, Hà Nội</li>
                                <li>Số điện thoại: 0822221992</li>
                                <li>Email: Mixiishop@gmail.com</li>
                            </ul>
                        </div>
        
                        <div className="col-12 col-md-6">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.538561069379!2d105.8138255758721!3d21.01112628838281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab62a5618c2d%3A0xb861a5fd512bbdb!2zUC5Zw6puIEzDo25nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1716129319216!5m2!1svi!2s" 
                                width="100%" 
                                height="500" 
                                style={{border: 0}} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mixer Shop Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
