import {Outlet} from "react-router-dom";

import {Posts} from "../../components";
import css from './PostsPage.module.css'

const PostsPage = () => {
    return (
        <div className={css.PostsPage}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};
