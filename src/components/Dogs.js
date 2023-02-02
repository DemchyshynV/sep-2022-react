import {Dog} from "./Dog";

const Dogs = ({dogs,dispatch}) => {
    return (
        <div>
            {dogs.map(dog=><Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {Dogs};
