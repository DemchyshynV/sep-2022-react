import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../components/Header/Header";

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <button onClick={()=>navigate(-1)}>prev</button>
            <button onClick={()=>navigate(1)}>next</button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
