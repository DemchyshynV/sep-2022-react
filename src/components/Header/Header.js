import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    return (
        <div>
            {selectedUser && selectedUser.name}
        </div>
    );
};

export {Header};
