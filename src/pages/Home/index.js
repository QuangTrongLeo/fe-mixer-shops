import Sliders from "~/pages/Home/components/Sliders";
import Policies from "~/pages/Home/components/Policies";
import NewProducts from "~/pages/Home/components/NewProducts";
import Banner from "~/pages/Home/components/Banner";
import SaleProducts from "~/pages/Home/components/SaleProducts";
import Introduce from "~/pages/Home/components/Introduce";
import Follow from "~/pages/Home/components/Follow";

function Home() {
    return (
        <div>
            <Sliders />
            <Policies />
            <NewProducts />
            <Banner />
            <SaleProducts />
            <Introduce />
            <Follow />
        </div>
    );
}

export default Home;
