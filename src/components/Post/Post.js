const Post = ({post}) => {
    const {id, userId, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {
    Post
}
