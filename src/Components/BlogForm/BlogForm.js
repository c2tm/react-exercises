import { useState } from "react";
import Form from "./Form";

function BlogForm() {
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    const addPost = (title, body) => {
        setPosts([...posts, {title: title, body: body,}]);
    }

    return(
        <div className="BlogForm">
            <Form addPost={addPost} />
            
        </div>
    )
}

export default BlogForm;