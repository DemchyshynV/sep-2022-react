import {Cars, Form} from "./components";
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

const App = () => {
   return(
       <Routes>
           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<Navigate to={'cars'}/>}/>

               <Route element={<AuthRequireLayout/>}>
                   <Route path={'cars'} element={<CarsPage/>}/>
               </Route>

               <Route path={'login'} element={<LoginPage/>}/>
               <Route path={'register'} element={<RegisterPage/>}/>

           </Route>
       </Routes>
   )
};

export {App};
