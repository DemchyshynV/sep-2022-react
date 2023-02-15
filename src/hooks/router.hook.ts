import {Location, useLocation} from 'react-router-dom';

interface IState<T> extends Location {
    state: T
}

const useAppLocation = <State>(): IState<State> => useLocation()


export {
    useAppLocation
}
