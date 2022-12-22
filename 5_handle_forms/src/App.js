import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books, setBooks] = useState([]);
    const handleCreateBook = (title) => {
        // Bad code!!
        // books.push({id: 123, title: title});
        const updatedBooks = [
            ...books,
            {id: Math.round(Math.random() * 9999), title}
        ];

        setBooks(updatedBooks);
    }

    return (
        <div className='app'>
            <BookList books={books} />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    )
}

export default App;