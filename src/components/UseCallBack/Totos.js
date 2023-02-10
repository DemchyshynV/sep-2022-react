import {memo} from "react";

const Totos = memo(({addTodo, todos}) => {
    console.log('Todos');
    return (
        <div>
            {todos.map((todo, index) => <div key={index}>{todo}</div>)}
            <button onClick={addTodo}>addTodo</button>
        </div>
    );
});

export {Totos};
