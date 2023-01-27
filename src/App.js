import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "./components/Home";
import {One} from "./components/One";
import {Two} from "./components/Two";
import {useEffect} from "react";
import {UserPage} from "./components/UserPage";

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/one'}>One</Link>
                <Link to={'/two'}>Two</Link>
                <Link to={'/users'}>Users</Link>
            </div>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'one'} element={<One/>}/>
                <Route path={'/two'} element={<Two/>}/>
                <Route path={'/users'} element={<UserPage/>}/>
            </Routes>
        </div>
    );
};

export {App};
