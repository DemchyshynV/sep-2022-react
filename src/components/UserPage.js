import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {useState} from "react";

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [updateUser, setUpdateUser] = useState(null);

    return (
        <div>
            <UserForm setUsers={setUsers} updateUser={updateUser} setUpdateUser={setUpdateUser}/>
            <hr/>
            <Users users={users} setUsers={setUsers} setUpdateUser={setUpdateUser}/>
        </div>
    );
};

export {UserPage};
