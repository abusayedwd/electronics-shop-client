 import Benner from './Home/Home/Benner'
import BestDeal from './Home/Home/BestDeal';
import Cardmarquee from './Home/Home/Cardmarquee';
import CategoryItem from "./Home/Home/CategoryItem";
import Collection from './Home/Home/Collection';
import DreamProduct from './Home/Home/DreamProduct';
import Features from './Home/Home/Features';
import Gadget from './Home/Home/Gadget';
import Offered from './Home/Home/Offered';
import Reviews from './Home/Home/Reviews';
import ViewProduct from "./Home/Home/ViewProduct";
 
 
 

const Home = () => {
        return (
                <div>
                        <Benner></Benner>
                        <Cardmarquee></Cardmarquee>
                       <CategoryItem></CategoryItem>
                       <Features></Features>
                       <Collection></Collection>
                       <ViewProduct></ViewProduct>
                       <BestDeal></BestDeal>
                       <Offered></Offered>
                       <DreamProduct></DreamProduct>
                       <Gadget></Gadget>
                       <Reviews></Reviews>
                </div>
        );
};

export default Home;