import React from "react";

const GiftCheckBox = ({ label, value, onChange }) => {

    return (
        <label>
            <div>
                <input
                    type="checkbox"
                    checked={value}
                    label="Has this item been bought?"
                    name="bought"
                    onChange={onChange}
                />
            </div>
            {label}
        </label>
    )
}

export default GiftCheckBox

