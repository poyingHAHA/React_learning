import {useState} from 'react';
import './SearchBar.css'

function SearchBar({ onSubmit }){
    const [term, setTerm] = useState('') 

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    // As I mentioned many times, it has always passed automatically into every event handler that we assign to a plain HTML element.
    const handleChange = (event) => {
        // console.log(event);
        setTerm(event.target.value);
    };
    
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label> Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar;