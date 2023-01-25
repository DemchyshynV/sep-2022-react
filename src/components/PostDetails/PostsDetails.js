import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";

const PostsDetails = ({postId, state}) => {
    const [post, setPost] = useState(null);


    useEffect(() => {
        if (state) {
            console.log(state);
            setPost({...state})
        } else {
            postService.getById(postId).then(({data}) => {
                setPost(data)
            })
        }
    }, [postId])

    return (
        <div>
            {post &&
                <>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>
            }
        </div>
    );
};

export {PostsDetails};
