import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./utils/constants";
import {Login} from "./pages/Login";
import {Root} from "./pages/Root";
import {ChatPage} from "./pages/ChatPage";

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Root />,
        children: [
            {
                path: ROUTES.ROOT,
                element: <ChatPage />
            },
            {
                path: ROUTES.LOGIN,
                element: <Login />
            }
        ]
    }
])