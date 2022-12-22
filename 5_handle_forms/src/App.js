import {useState} from 'react';
import BookCreate from './components/BookCreate';

function App(){
    const [books, setBooks] = useState([]);
    const handleCreateBook = (title) => {
        // Bad code!!
        // books.push({id: 123, title: title});
        const updatedBooks = [
            ...books,
            {id: 123, title}
        ];

        setBooks(updatedBooks);
    }

    return (
        <div>
            <BookCreate onCreate={handleCreateBook} />
        </div>
    )
}

export default App;