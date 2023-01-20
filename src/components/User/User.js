import {useState} from "react";
import {postService} from "../../services";

const User = ({user, setUserId}) => {
    const {id, name, email} = user;
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
      postService.getByUserId(id).then(({data})=>setPosts([...data]))
    }

    const test = (name)=>{
        console.log(name);
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            {!posts.length&& <button onDoubleClick={() => getPosts()}>Posts</button>}
            {!!posts.length&& <button onClick={()=>setPosts([])}>hide</button>}
            {posts.map(post=>JSON.stringify(post))}
            <button onClick={()=>setUserId(555)}>AAAAAAAAAAAAAAAAA</button>
            <button onClick={test.bind(this, 55)}>Test</button>
        </div>
    );
};

export {User};
