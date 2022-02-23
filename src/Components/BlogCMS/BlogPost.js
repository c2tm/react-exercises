import { useState } from "react"

function BlogPost({url, title, body, id, posts, setPosts, editToggle, setEditToggle}) {

    const [newTitle, setNewTitle] = useState(``);
    const [newBody, setNewBody] = useState(``);
    const [newUrl, setNewUrl] = useState(``);

    const handleChangeNewUrl = (e) => {
        setNewUrl(e.target.value);
    }

    const handleChangeNewTitle = (e) => {
        setNewTitle(e.target.value)
    }

    const handleChangeNewBody = (e) => {
        setNewBody(e.target.value)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        let postsCopy = [...posts];
        let newPost = {url: newUrl, title: newTitle, body: newBody, id};
        let index = postsCopy.findIndex(item => item.id === id);
        postsCopy[index] = newPost;
        setPosts(postsCopy);
        setEditToggle(!editToggle);
    }

    const handleDelete = () => {
        let postsCopy = [...posts];
        let index = postsCopy.findIndex(item => item.id === id);
        postsCopy.splice(index, 1);
        setPosts(postsCopy);
    }


    const postsHTML = (
        <div className="blog-post">
            <img src={url} alt={`Post`}/>
            <h1>{title}</h1>
            <p>{body}</p>
            <button type="button" onClick={handleDelete}>delete</button>
        </div>
    )

    const editHTML = (
        <div className="blog-post">
            <form className="cms-edit-form" onSubmit={handleEditSubmit}>
                <label>Image Url</label>
                <input value={newUrl} onChange={handleChangeNewUrl}/>
                <label>Title</label>
                <input value={newTitle} onChange={handleChangeNewTitle}/>
                <label>Body</label>
                <input value={newBody} onChange={handleChangeNewBody}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )

    return (
        editToggle ? editHTML : postsHTML
    )
}

export default BlogPost;