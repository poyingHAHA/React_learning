import {useState} from 'react';
import { GoChevronDown } from 'react-icons/go';

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
    <div className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleCLick} >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg'/>
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown;