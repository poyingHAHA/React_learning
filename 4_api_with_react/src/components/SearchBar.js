import {useState} from 'react';

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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar;