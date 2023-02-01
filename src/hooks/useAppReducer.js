import {useContext} from "react";
import {StateContext} from "../hoc/StateProvider";

const useAppReducer = (item)=> item(useContext(StateContext))

export {
    useAppReducer
}
