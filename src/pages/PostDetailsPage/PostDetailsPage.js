import {Posts, PostsDetails} from "../../components";
import {useLocation, useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <PostsDetails postId={postId} state={state}/>
        </div>
    );
};

export {PostDetailsPage};
