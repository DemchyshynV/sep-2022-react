import {Route, Routes} from "react-router-dom";

import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {MainLayout} from "./layouts";
import {PostsDetails} from "./components";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={
                        <RequireAuth>
                            <PostsPage/>
                        </RequireAuth>
                    }>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
