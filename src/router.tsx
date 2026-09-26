import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./utils/constants/routes.ts";
import Login from "./pages/Login/Login.tsx";
import Root from "./pages/Root/Root.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Root />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <Login />
            }
        ]
    }
])