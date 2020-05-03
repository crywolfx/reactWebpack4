import Home from "../pages/Home/index.jsx";
import Count from "../pages/Count/index.jsx";
import Loader from "../pages/Loader/index.jsx";

const routerConfig = [
    {
        path: '/',
        key: '/',
        component: Home,
        exact: true
    },
    {
        path: '/count',
        key: '/count',
        component: Count,
        exact: true
    },
    {
        path: '/loader',
        key: '/loader',
        component: Loader,
        exact: true
    }
]
export default routerConfig;