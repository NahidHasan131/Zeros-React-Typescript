import { Outlet } from "react-router-dom";
import HomeNav from "./HomeNav";

const AppLayout = () => {
    return (
        <div>
            <HomeNav/>
            <Outlet/>
        </div>
    );
};

export default AppLayout;