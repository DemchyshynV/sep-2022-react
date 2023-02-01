import {useForm} from "react-hook-form";
import {useAppReducer} from "../hooks/useAppReducer";
import {userActions} from "../reducers/userReducer";

const UserForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const [, dispatch] = useAppReducer(value=>value.userReducer);

    const save = (user) => {
        dispatch(userActions.ADD(user))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'surname'} {...register('surname')}/>
            <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};
