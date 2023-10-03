 import Benner from './Home/Home/Benner'
import BestDeal from './Home/Home/BestDeal';
import CategoryItem from "./Home/Home/CategoryItem";
import Collection from './Home/Home/Collection';
import Features from './Home/Home/Features';
import ViewProduct from "./Home/Home/ViewProduct";

const Home = () => {
        return (
                <div>
                        <Benner></Benner> 
                       <CategoryItem></CategoryItem>
                       <ViewProduct></ViewProduct>
                       <Features></Features>
                       <Collection></Collection>
                       <BestDeal></BestDeal>
                </div>
        );
};

export default Home;