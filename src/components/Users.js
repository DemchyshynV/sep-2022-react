import {User} from "./User";
import {useState} from "react";

const Users = ({users,setUsers,setUpdateUser}) => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setUsers={setUsers} setUpdateUser={setUpdateUser}/>)}
        </div>
    );
};

export {Users};
