import Category from "../components/Category/Category";
import NewArrival from "../components/New-Arrival/NewArrival";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 lg:px-4 space-y-10">
            <Slider/>
            <Category limit={4}/>
            <Products limit={4}/>
            <NewArrival/>
            <Newsletter/>
        </div>
    );
};

export default Home;