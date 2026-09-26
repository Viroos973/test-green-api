import {createHashRouter} from "react-router-dom";
import {ROUTES} from "./utils/constants/routes.ts";
import Root from "./pages/Root/Root.tsx";

export const router = createHashRouter([
    {
        path: ROUTES.ROOT,
        element: <Root />,
        children: []
    }
])