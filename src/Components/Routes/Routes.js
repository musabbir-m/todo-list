import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";


const routes= createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login> </Login>
            },
            {
                path: '/signup', 
                element: <Signup> </Signup>
            }
        ]
    }
])

export default routes