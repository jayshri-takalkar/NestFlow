import React from "react";

export const Select = ({ options = [], value, onChange, className }) => {
    return (
        <select value={value} onChange={onChange} className={`border px-3 py-2 rounded ${className}`}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export const SelectItem = ({ value, children }) => (
    <option value={value}>{children}</option>
);