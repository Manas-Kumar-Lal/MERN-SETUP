import React from 'react';

const TextArea = ({ label = "Label", ...props }) => {
    return (
        <div className='primaryBG w-full flex flex-col gap-1'>
            {label && (
                <label className="strongText w-fit font-medium" htmlFor={props?.id || label}>
                    {label}
                </label>
            )}
            {/* TextArea field */}
            <textarea
                id={props?.id || label}
                {...props}
                className="strongText bg-transparent w-full flex-1 rounded-r-md focus:outline-none p-3 resize-none border weakBorder rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500"
                rows={4} // Set a default number of rows
            />
        </div>
    );
};

export default TextArea;
