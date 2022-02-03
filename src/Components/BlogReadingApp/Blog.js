function Blog(props) {
    const {title, body} = props.blog;

    let html = (
        <div className="current-blog">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );

    return (html)
}

export default Blog;