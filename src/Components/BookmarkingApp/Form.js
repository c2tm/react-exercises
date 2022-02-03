import {useState} from 'react';

function Form({addBookmark}) {


    const [url, setUrl] = useState(``);
    const [title, setTitle] = useState(``);
    const [tag, setTag] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookmark({
            url,
            title,
            tag,
        });
        setUrl('');
        setTitle('');
        setTag('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Website URL</label>
            <input type="url" value={url} placeholder="Website Url" onChange={(e) => setUrl(e.target.value)}/>
            <label>Title</label>
            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
            <label>Tag</label>
            <input type="text" value={tag} placeholder="Tag" onChange={(e) => setTag(e.target.value)}/>
            <button type='submit'>Add bookmark</button>
        </form>
    )
}

export default Form;