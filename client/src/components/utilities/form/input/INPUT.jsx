import React, { useRef } from 'react';
import { FaUserGraduate } from 'react-icons/fa'; // Import the icon you want to use

const INPUT = ({ icon = <FaUserGraduate />, label, ...props }) => {

    const inputRef = useRef(null);

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className='w-full flex flex-col gap-1'>
            {label && (
                <label className="strongText w-fit font-medium" htmlFor={props?.id || label}>
                    {label}
                </label>
            )}
            <div className="primaryBG strongText h-[3rem] flex items-center border-[1px] weakBorder rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                {/* Icon container */}
                <span onClick={handleIconClick} className="secondaryBG h-full flex items-center justify-center px-3 rounded-l-md">
                    {icon}
                </span>
                {/* Input field */}
                <input
                    id={props?.id || label}
                    ref={inputRef}
                    {...props}
                    className="bg-transparent w-full flex-1 border-none rounded-r-md focus:outline-none px-3 h-full"
                />
            </div>
        </div>
    );
};

export default INPUT;
