import App from "./App"
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";
import Error from "./Error";
import UrlError from "./UrlError"
export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        errorElement:<UrlError/>
        
    },
    {
          path:"/home",
          element:<Dashboard/>
    },
    {
        path:"/users",
        element: <User />

    },
    {
        path:"/home",
        element:<Dashboard/>
    },
    {

        path :"/error",
        element :<Error/>,
       
    }
     
    
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router ={appRouter} />)