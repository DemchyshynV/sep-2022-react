import {Header} from "./components/Header/Header";
import {Users} from "./components";
import {userActions, userSlice} from "./redux";

const App = () => {
    // console.log(userSlice);
    console.log(userActions.getAll());
    return (
        <div>

            <Header/>
            <Users/>
        </div>
    );
};

export {App};
