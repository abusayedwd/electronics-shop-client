import {
        createBrowserRouter,
       
      } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Features from "../pages/Home/Home/Features";
import BestDeal from "../pages/Home/Home/BestDeal";
import Offered from "../pages/Home/Home/Offered";
import Collection from "../pages/Home/Home/Collection";
import Loginform from "../shared/Logingform";


     export const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
                {
                        path:'/',
                        element: <Home></Home>
                },
                {
                  path:'feature',
                  element:<Features></Features>
                },
                {
                  path:'best',
                  element:<BestDeal></BestDeal>
                },
                {
                  path:'offered',
                  element:<Offered></Offered>
                },
                {
                  path:'collection',
                  element:<Collection></Collection>
                },
                {
                  path:'login',
                  element:<Loginform></Loginform>
                }
          ]
        },
      ]);