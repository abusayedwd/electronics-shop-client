 import Benner from './Home/Home/Benner'
import CategoryItem from "./Home/Home/CategoryItem";
import Features from './Home/Home/Features';
import ViewProduct from "./Home/Home/ViewProduct";

const Home = () => {
        return (
                <div>
                        <Benner></Benner> 
                       <CategoryItem></CategoryItem>
                       <ViewProduct></ViewProduct>
                       <Features></Features>
                </div>
        );
};

export default Home;