import {useSelector} from "react-redux";

import {Cars, Form} from "../../components";

const CarsPage = () => {
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

export {CarsPage};
