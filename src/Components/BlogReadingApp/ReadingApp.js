import { useState } from "react";
import Blog from "./Blog";
import BlogList from "./BlogList";


const DATA = [{
    title: 'Example1',
    imgUrl: 'https://picsum.photos/200/200',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
    title: 'Example2',
    imgUrl: 'https://picsum.photos/200/200',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
    title: 'Example3',
    imgUrl: 'https://picsum.photos/200/200',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]

function ReadingApp() {

    // const [blogNum, setBlogNum] = useState(0);
    const [blogs, setBlogs] = useState(DATA);
    const [selection, setSelection] = useState(null);

    // const blog = DATA[blogNum];
    
    return(
        <div className="reading-app-container">
            <div className="blog-list-container">
                <BlogList blogs={blogs} setSelection={setSelection} />
            </div>
            
            <div className="current-blog-container">
                {selection && <Blog blog={selection}/>}
            </div>
        </div>
        
    )
}

export default ReadingApp;