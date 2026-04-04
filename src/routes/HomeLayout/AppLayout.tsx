import { Outlet } from "react-router-dom";
import HomeNav from "./HomeNav";
import HomeFooter from "./HomeFooter";

const AppLayout = () => {
    return (
        <div >
            <marquee className="bg-[#f0f5e8] p-1 text-black/70%">Big sale, Mega Offer! Get 20% Flat Discount for All Product</marquee>
            <HomeNav/>
            <Outlet/>
            <HomeFooter/>
        </div>
    );
};

export default AppLayout;