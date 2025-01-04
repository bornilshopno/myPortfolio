import {
    createBrowserRouter,
} from "react-router-dom";
import MainElement from "./MainElement";
import Home from "../Components/Home";

export const router =
    createBrowserRouter([
        {
            path: "/",
            element: <MainElement></MainElement>,
            errorElement:<h2>This is error page</h2>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                }
            ]
                        
        },
    ]);

