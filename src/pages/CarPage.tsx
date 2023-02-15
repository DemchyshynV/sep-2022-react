import {FC} from 'react';
import {CarForm} from '../components/CarForm';
import {Outlet} from 'react-router-dom';
import {Cars} from '../components';

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};
