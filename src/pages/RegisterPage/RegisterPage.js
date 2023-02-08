import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const registerUser = async (user) => {
        try {
            await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>Register</button>
                </form>
            </div>
            {error&&<div>{JSON.stringify(error)}</div>}
        </div>
    );
};

export {RegisterPage};
