import { useState } from "react";

function Form({addPost}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleChangeForm = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, body);
        setBody('');
        setTitle('');
    }

    return(
        <form className="BlogInputs" onSubmit={handleSubmit}>
            <label>Title</label>
            <input placeholder="Title" value={title} onChange={handleChangeForm}/>
            <label>Body</label>
            <input placeholder="Body" value={body} onChange={handleChangeBody}/>
            <button type="submit" className="post-button" >Post</button>
        </form>
    )
}

export default Form;