import Header from "~/components/Layout/components/Header";
import Footer from "~/components/Layout/components/Footer";
import ButtonScrollTop from "~/components/Layout/components/ButtonScrollTop";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
                <br></br><br></br><br></br>
                <div className="content">{children}</div>
                <ButtonScrollTop />
            <Footer />
        </div>
    );
}

export default DefaultLayout;