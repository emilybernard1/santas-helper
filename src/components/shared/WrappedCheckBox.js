import React from "react";

const WrappedCheckBox = ({ label, value, onChange, handleChange }) => {

    return (
        <label>
            <div>
                 <input
                    type="checkbox"
                    checked={value}
                    label="Has this item been wrapped?"
                    name="isWrapped"
                    onChange={handleChange}
                />
            </div>
            {label}
        </label>
    )
}

export default WrappedCheckBox
