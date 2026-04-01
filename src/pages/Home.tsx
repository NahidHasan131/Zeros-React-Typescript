import Category from "../components/Category/Category";
import Slider from "../components/Slider/Slider";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 lg:px-4 space-y-10">
            <Slider/>
            <Category limit={4}/>
        </div>
    );
};

export default Home;