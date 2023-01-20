import {useState} from "react";

import {Posts, Users} from "./components";


const AppSD = () => {
    const [userId, setUserId] = useState(null);

    const liftUserId = (id)=>{
        console.log(id);
        console.log('liftUserId');
        setUserId(id)
    }

    return (
        <div>
            <Users setUserId={liftUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export {AppSD};
