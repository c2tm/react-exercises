import {useState} from 'react'
 
function BlogForm(props) {

    const [url, setUrl] = useState(``);
    const [title, setTitle] = useState(``);
    const [body, setBody] = useState(``);

    const handleChange1 = (e) => {
        setUrl(e.target.value);
    }
    const handleChange2 = (e) => {
        setTitle(e.target.value);
    }
   const handleChange3 = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setPosts([...props.posts, {url, title, body, id: props.uid}]);
        setUrl(``);
        setTitle(``);
        setBody(``);
        props.setUid(props.uid + 1);
    }

    return(
        <div className="cms-blog-form-container">
            <form className="cms-blog-form" onSubmit={handleSubmit}>
                <label>Image URL</label>
                <input type="text" value={url} onChange={handleChange1}/>
                <label>Title</label>
                <input type="text" value={title} onChange={handleChange2}/>
                <label>Body</label>
                <textarea className="cms-blog-input-body" value={body} onChange={handleChange3}></textarea>
                <button type="submit">Submit</button>
            </form>
            
        </div>  
    )
}

export default BlogForm;