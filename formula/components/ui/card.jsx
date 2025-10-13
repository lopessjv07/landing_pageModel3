import React from 'react';

// Componente principal do Card: um container 'div'
const Card = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Subcomponente para o cabeçalho do Card
const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Subcomponente para o título, renderizado como 'h3' por padrão
const CardTitle = ({ children, className, as: Component = 'h3', ...props }) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

// Subcomponente para a descrição
const CardDescription = ({ children, className, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

// Subcomponente para a área de conteúdo principal do Card
const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Exporta todos os componentes para que possam ser importados como você fez
export { Card, CardHeader, CardTitle, CardDescription, CardContent };
