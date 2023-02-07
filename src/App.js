import {Cars, Form} from "./components";
import {useSelector} from "react-redux";

const App = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Form/>
            <hr/>
            {loading && <h1>Loading..................</h1>}
            <Cars/>
        </div>
    );
};

export {App};
