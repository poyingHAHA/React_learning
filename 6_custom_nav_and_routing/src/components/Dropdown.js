import {useState} from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleCLick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(!isOpen);
    // WHAT OPTION DID THE USER CLICK ON??
    console.log(option);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    <div>
      <div onClick={handleCLick} >Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown;