import {Panel} from "@maxhub/max-ui";
import {Outlet} from "react-router-dom";

const Root = () => (
    <Panel mode="primary">
        <Outlet/>
    </Panel>
)

export default Root