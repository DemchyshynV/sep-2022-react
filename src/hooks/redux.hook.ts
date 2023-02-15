import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../redux';

// const useAppSelector = useSelector as TypedUseSelectorHook<RootState>
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch = () => useDispatch<AppDispatch>()

export {
    useAppDispatch,
    useAppSelector
}
