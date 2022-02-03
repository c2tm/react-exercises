
import { useState } from 'react';
import './App.css';
import BlogList from './BlogCMS/BlogList'
import BlogForm from './BlogForm/BlogForm'
import ReadingApp from './BlogReadingApp/ReadingApp';
import BookmarkingApp from './BookmarkingApp/BookmarkingApp';
import ContactForm from './ContactForm/ContactForm';

function App() {
  const [filter, setFilter] = useState('a');
  return (
    <div className="App">
      <nav>
        <li><button onClick={() => setFilter('a')}>a</button></li>
        <li><button onClick={() => setFilter('b')}>b</button></li>
        <li><button onClick={() => setFilter('c')}>c</button></li>
        <li><button onClick={() => setFilter('d')}>d</button></li>
        <li><button onClick={() => setFilter('e')}>e</button></li>
      </nav>
      {filter === 'a' && <BlogForm />}
      {filter === 'b' && <ContactForm />}
      {filter === 'c' && <ReadingApp />}
      {filter === 'd' && <BookmarkingApp />}
      {filter === 'e' && <BlogList />}
    </div>
  );
}

export default App;
