import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const BorderlessINPUT = React.forwardRef(({ className, label, type = 'text', ...props }, ref) => {

    const [inputType, setInputType] = useState(type);
    const [eyebutton, setEyebutton] = useState(true);

    const handleEyeClick = () => {
        setEyebutton((prev) => !prev);
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className="mt-6 w-full flex flex-col">
            {label && (
                <label className="text-lg font-semibold mb-2 text-[lightseagreen]">
                    {label}
                </label>
            )}

            <div className="flex items-center border-b border-[lightseagreen] focus-within:border-[lightseagreen] relative">
                <FiArrowRight className="text-[lightseagreen] text-xl" />

                <input
                    {...props}
                    ref={ref}
                    type={inputType}
                    className={`normalText bg-transparent border-none w-full mr-3 py-2 px-4 leading-tight focus:outline-none ${className}`}
                />

                {type === 'password' && (
                    <div
                        onClick={handleEyeClick}
                        className="strongText absolute top-1/2 right-[3%] -translate-y-1/2 cursor-pointer"
                    >
                        {eyebutton ? <FaEyeSlash /> : <FaRegEye />}
                    </div>
                )}
            </div>
        </div>
    );
});

export default BorderlessINPUT;
