import About from "../pages/public/About";
import Homepage from "../pages/public/Homepage";
import Membership from "../pages/public/membership";

export const publicRoutes = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/membership",
        element: <Membership />
    }

]