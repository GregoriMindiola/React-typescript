import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input
                className="input w-full"
                {...props}
            />
        </fieldset>
    )
}

export default Input