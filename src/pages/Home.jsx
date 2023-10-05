 import Benner from './Home/Home/Benner'
import BestDeal from './Home/Home/BestDeal';
import CategoryItem from "./Home/Home/CategoryItem";
import Collection from './Home/Home/Collection';
import DreamProduct from './Home/Home/DreamProduct';
import Features from './Home/Home/Features';
import Gadget from './Home/Home/Gadget';
import Offered from './Home/Home/Offered';
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
                       <Offered></Offered>
                       <DreamProduct></DreamProduct>
                       <Gadget></Gadget>
                </div>
        );
};

export default Home;