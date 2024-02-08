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
import LetestDetails from "../pages/Home/details/LetestDetails";
import ErrorPage from "./Error";


     export const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement:<ErrorPage></ErrorPage>,
          children: [
                {
                        path:'/',
                        element: <Home></Home>,
                        errorElement:<ErrorPage></ErrorPage>
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
                },
                {
                  path:'details/:id',
                  element:<LetestDetails></LetestDetails>,
                  // eslint-disable-next-line no-unused-vars
                  loader: ({params}) => fetch('/features.json')
                }
          ]
        },
      ]);