import React from 'react';

// O componente Button aceita 'children' para o conteúdo e 'className' para estilização.
// As '...props' garantem que outras propriedades de botão (como onClick) sejam aplicadas.
const Button = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
