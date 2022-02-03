import { useState } from "react/cjs/react.development";
import BlogForm from "./BlogForm";
import BlogPost from "./BlogPost";


const DEFAULT_ARTICLE = [{
    url: `https://picsum.photos/200/300`,
    title: `example1`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    id: 1
}]

function BlogList() {

    const [uid, setUid] = useState(2)

    const [formToggle, setFormToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);

    const [posts, setPosts] = useState([...DEFAULT_ARTICLE]);

    const handleAddClick = () => {
        setFormToggle(!formToggle);
    }

    const formHTML = (
        <div className="cms-blog-form">
                <BlogForm  setPosts={setPosts} posts={posts} uid={uid} setUid={setUid}/>
        </div>
    )

    const postsHTML = posts.map(item => <BlogPost {...item} editToggle={editToggle} setEditToggle={setEditToggle} posts={posts} setPosts={setPosts}/>)

    return(
        <div className="cms-blog-container">
            <nav className="cms-nav">
                <ul>
                    <li>
                        <button type="button" onClick={() => setEditToggle(!editToggle)}>Edit</button>
                    </li>
                    <li>
                        <button type="button" onClick={handleAddClick}>Add</button>
                    </li>
                </ul>
            </nav>
            {formToggle && formHTML}
            <div className="cms-blog-list">
                {postsHTML}
            </div>
        </div>
    )
}

export default BlogList;