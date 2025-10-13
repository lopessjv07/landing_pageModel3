import React from 'react';

// O componente Badge renderiza um 'span' por padrão.
// Ele aceita 'children' para o texto e 'className' para estilização.
const Badge = ({ children, className, ...props }) => {
    return (
        <span className={className} {...props}>
            {children}
        </span>
    );
};

export default Badge;
