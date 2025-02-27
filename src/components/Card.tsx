import React, { ReactNode } from "react"

interface CardProps {
    children: ReactNode,
    title: string,
}

const Card: React.FC<CardProps> = ({ children, title }) => {
    return (
        <div className="bg-base-100 p-6 rounded-lg shadow-md w-100">
            <h3 className="text-center">{title}</h3>
            {children}
        </div>
    )
}

export default Card