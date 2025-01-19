import React, { useRef } from 'react';
import { FaGenderless } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const SELECT = ({ icon = <FaGenderless />, label, options = ["option1", "option2"], disabled, ...props }) => {

    const inputRef = useRef(null);

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={`w-full flex flex-col gap-1 ${disabled && 'opacity-50 cursor-not-allowed'}`}>
            {label && (
                <label className={`strongText w-fit font-medium ${disabled && 'cursor-not-allowed'}`} htmlFor={props?.id || label}>
                    {label}
                </label>
            )}
            <div className="primaryBG strongText weakBorder h-[3rem] relative flex items-center border rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                {/* Icon */}
                <span onClick={handleIconClick} className="secondaryBG h-full flex items-center justify-center px-3 rounded-l-md">
                    {icon}
                </span>

                {/* Custom Select */}
                <select
                    className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} primaryBG strongText bg-transparent w-full flex-1 h-full border-none focus:outline-none rounded-r-md appearance-none pr-8 px-3 capitalize`}
                    id={props?.id || label}
                    ref={inputRef}
                    {...props}
                    disabled={disabled}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                {/* Dropdown arrow */}
                <span className="absolute right-2 pointer-events-none">
                    <FiChevronDown className="text-gray-400" />
                </span>
            </div>
        </div>
    );
};

export default SELECT;
