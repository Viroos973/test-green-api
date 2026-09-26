import {Outlet} from "react-router-dom";

const Root = () => (
    <div className="h-screen flex flex-col">
        <Outlet/>
    </div>
)

export default Root