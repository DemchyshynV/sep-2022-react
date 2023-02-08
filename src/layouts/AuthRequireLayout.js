import {Outlet} from "react-router-dom";

const AuthRequireLayout = () => {
    return (
        <div>
            AuthRequireLayout
            <Outlet/>
        </div>
    );
};

export {AuthRequireLayout};
