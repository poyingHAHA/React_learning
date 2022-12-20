// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get a reference to the div with ID: root
const el = document.createElementId('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component(a function that return jsx)
function App(){
    let message = 'Hello'

    return <h1>{message}</h1>;
}

// 5. Show the component on the screen
root.render(<App />);