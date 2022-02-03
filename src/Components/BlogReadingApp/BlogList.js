function BlogList({blogs, setSelection}) {

    // const handleClick = (index) => {
    //     setBlogNum(index)
    // }

    const newBlogList = blogs.map((post, index) => 
        <li>
            <h1 onClick={() => setSelection(post)}>{post.title}</h1>
            <img src={post.imgUrl} alt={`Blog Post ${index}`}/>
        </li>
    )
    

    return (
        <ul className="blog-list">
            {newBlogList}
        </ul>
    )
}

export default BlogList;