import {CarForm, Cars} from "./components";
import {carService} from "./services";
import {useEffect, useState} from "react";

const App = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars([...data]))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export {App};
