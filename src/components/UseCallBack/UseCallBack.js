import {useCallback, useState} from "react";
import {Totos} from "./Totos";

const UseCallBack = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        setTodos(prevState => [...prevState, 'newTodo'])

    },[])

    return (
        <div>
            <Totos todos={todos} addTodo={addTodo}/>
            <div>count:{count}</div>
            <button onClick={() => setCount(prevState => prevState + 1)}>inc</button>
        </div>
    );
};

export {UseCallBack};
