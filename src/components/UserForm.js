import {useForm} from "react-hook-form";
import {useEffect} from "react";

const UserForm = ({setUsers, updateUser,setUpdateUser}) => {
    const {handleSubmit, reset, register, setValue} = useForm();

    useEffect(() => {
        if (updateUser) {
            setValue('name', updateUser.name)
            setValue('surname', updateUser.surname)
            setValue('age', updateUser.age)
        }
    }, [updateUser])
    const handleUser = (user) => {
        if (updateUser) {
            setUsers(prevState=>{
                const tmp = prevState.find(value => value.id===updateUser.id);
                Object.assign(tmp, user, {myName:'Vitaliy'})
                return [...prevState]
            })
            setUpdateUser(null)
        } else {
            setUsers(prev => {
                const [lastUser] = prev.slice(-1);
                const id = lastUser ? lastUser.id + 1 : 0
                return [...prev, {...user, id}]
            })
        }
        reset()
    };


    return (
        <form onSubmit={handleSubmit(handleUser)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'surname'} {...register('surname')}/>
            <input type="text" placeholder={'age'} {...register('age')}/>
            <button>{updateUser ? 'update' : 'create'}</button>
        </form>
    );
};

export {UserForm};
