import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className="btn-block mt-4 btn btn-soft btn-success" {...props}>
            {children}
        </button>
    )
}

export default Button