import Home from "../pages/Home/index.jsx";
import Count from "../pages/Count/index.jsx";
import Loader from "../pages/Loader/index.jsx";
import Snap from "../pages/Snap/index.jsx";

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
    },
    {
        path: '/snap',
        key: '/snap',
        component: Snap,
        exact: true
    }
]
export default routerConfig;