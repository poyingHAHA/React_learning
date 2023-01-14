import {useState} from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleCLick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(!isOpen);
    // WHAT OPTION DID THE USER CLICK ON??
    onChange(option);
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
      <div onClick={handleCLick} >{value?.label || 'Select...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown;