import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MainLayout} from './layouts';
import {CarPage} from './pages';
import {CarDetails} from './components';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetails/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export {App};
