import {Outlet} from "react-router-dom";

export const Root = () => (
    <div className="h-screen flex flex-col">
        <Outlet/>
    </div>
)