import { useState } from "react";
import Form from "./Form";

const DATA = [{
    url: `https://picsum.photos/200/300`,
    title: `example1`,
    tag: `red`
},
{
    url: `https://picsum.photos/500/500`,
    title: `example2`,
    tag: `green`
}]

function BookmarkingApp() {

    // const [url, setUrl] = useState(``);
    // const [title, setTitle] = useState(``);
    // const [tag, setTag] = useState(``);

    const [bookmarks, setBookmarks] = useState(DATA); // bookmarks
    const [filter, setFilter] = useState(null);
    // const [copyList, setCopyList] = useState([...entryList]);

    const addBookmark = (bookmark) => {
        // setEntryList([...entryList, {url: url, title: title, tag: tag}]);
        // setCopyList([...entryList, {url: url, title: title, tag: tag}]);
        // setUrl(``);
        // setTitle(``);
        // setTag(``);
        setBookmarks([...bookmarks, bookmark]);
    }


    const uniqueTags = [...new Set(bookmarks.map(bookmark => bookmark.tag))];
    
    const tagsHTML = uniqueTags.map((tag) => (
        <button key={tag} type="button" value={tag} onClick={() => setFilter(tag)}>{tag}</button>
    ));

    const filteredBookmarks = bookmarks
    .filter(bookmark => filter ? bookmark.tag === filter : bookmark)
    .map((bookmark, index) => (
        <div key={index} className="url-list-container">
            <p>{bookmark.title}</p>
            <a href={bookmark.url}>{bookmark.url}</a>
        </div>
    ));

    return(
        <div className="bookmarking-app-container">
            <div className="bookmarking-form-container">
                <Form addBookmark={addBookmark} />
            </div>
            <button type="button" value="All" onClick={() => setFilter(null)}>All</button>
            {tagsHTML}
            {filteredBookmarks}
        </div>
    )
}

export default BookmarkingApp;