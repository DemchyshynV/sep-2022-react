import {useContext} from "react";

import {AuthContext} from "../hoc/AuthProvider";

const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
}
