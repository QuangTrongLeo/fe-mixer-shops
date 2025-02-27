import routesConfig from '~/config/routes';

// Layout
import { SidebarLayout } from '~/components/Layout';

// Pages
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import Contact from '~/pages/Contact';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Login from '~/pages/Login';
import Manager from '~/pages/Manager';
import Order from '~/pages/Order';
import Policy from '~/pages/Policy';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import Search from '~/pages/Search';
import Terms from '~/pages/Terms';
import AllProducts from '~/pages/AllProducts';

// Customer
const publicRoutesCustomer = [
    { path: routesConfig.home, component: Home},
    { path: routesConfig.cart, component: Cart},
    { path: routesConfig.contact, component: Contact},
    { path: routesConfig.detail, component: Detail},
    { path: routesConfig.introduce, component: Introduce},
    { path: routesConfig.login, component: Login},
    { path: routesConfig.order, component: Order},
    { path: routesConfig.policy, component: Policy},
    { path: routesConfig.profile, component: Profile},
    { path: routesConfig.register, component: Register},
    { path: routesConfig.terms, component: Terms},
    { path: routesConfig.category, component: Category, layout: SidebarLayout},
    { path: routesConfig.products, component: AllProducts, layout: SidebarLayout},
    { path: routesConfig.manager, component: Manager, layout: SidebarLayout},
    { path: routesConfig.search, component: Search, layout: SidebarLayout}
]

// User
const publicRoutesUser = [

]

// Admin
const publicRoutesAdmin = [

]

export { publicRoutesCustomer, publicRoutesUser, publicRoutesAdmin }