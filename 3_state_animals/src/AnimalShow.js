import './AnimalShow.css';
import {useState} from 'react'
import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import heart from './images/heart.svg'
import horse from './images/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}

function AnimalShow({ type }){
    const [clicks, setClicks] =useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={svgMap[type]} alt={type} />
            <img className='heart'
                src={svgMap['heart']} 
                alt={type} 
                style={{ 
                    width: 10 + 10 * clicks + 'px'
                }} 
            />
        </div>
    )
}

export default AnimalShow;