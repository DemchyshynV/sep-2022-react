import {useAppReducer} from "../hooks/useAppReducer";
import {userActions} from "../reducers/userReducer";

const User = ({user}) => {
    const [, dispatch] = useAppReducer(value=>value.userReducer);
    const {id, name, surname, age} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <button onClick={()=>dispatch(userActions.DELETE_BY_ID(id))}>delete</button>
        </div>
    );
};

export {User};
