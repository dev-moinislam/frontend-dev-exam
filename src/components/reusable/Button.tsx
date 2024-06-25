import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?:string 
}

const Button: React.FC<ButtonProps> = ({type, onClick, children, className }) => {
    return (
        <button type={type as any} className={`custom-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
