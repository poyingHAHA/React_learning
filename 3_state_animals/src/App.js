import { useState } from 'react';

function App(){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1)
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>Number of Animal: {count}</div>
        </div>
    )
}

export default App;