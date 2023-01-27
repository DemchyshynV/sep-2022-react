const User = ({user,setUsers,setUpdateUser}) => {
    const userDelete = () => {
        setUsers(prev=>{
            const index = prev.findIndex(value => value.id===user.id);
            prev.splice(index, 1);
            return [...prev]
        })
    };

    return (
        <div>
            {JSON.stringify(user)}
            <button onClick={()=>userDelete()}>delete</button>
            <button onClick={()=>setUpdateUser(user)}>update</button>

        </div>
    );
};

export {User};
