import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./utils/constants/routes.ts";
import Login from "./pages/Login/Login.tsx";
import Root from "./pages/Root/Root.tsx";
import ChatPage from "./pages/ChatPage/ChatPage.tsx";

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