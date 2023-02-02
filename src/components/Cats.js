import {Cat} from "./Cat";

const Cats = ({cats,dispatch}) => {
    return (
        <div>
            {cats.map(cat=><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};
