import Header from "~/components/Layout/components/Header";
import Sidebar from "~/components/Layout/components/Sidebar";
import Footer from "~/components/Layout/components/Footer";
import ButtonScrollTop from "~/components/Layout/components/ButtonScrollTop";
import "./sidebarLayout.css";

function SidebarLayout({ children }) {
    return (
        <div>
            <Header />
            <br></br><br></br><br></br>
            <div className="container">
                <div className="row">
                    {/* Sidebar (chiếm 3 cột) */}
                    <div className="col-md-3 sidebar">
                        <Sidebar />
                    </div>

                    {/* Nội dung chính (chiếm 9 cột) */}
                    <div className="col-md-9 content">
                        <div className="content">{children}</div>
                    </div>
                </div>
            </div>
            
            <ButtonScrollTop />
            <Footer />
        </div>
    );
}

export default SidebarLayout;
