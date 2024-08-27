// components/StackDetails.tsx
import React from 'react';

interface StackDetailsProps {
  stackType: string;
}

const StackDetails: React.FC<StackDetailsProps> = ({ stackType }) => {
  const renderStacks = () => {
    switch (stackType) {
      case 'Front End':
        return (
          <>
            <li>React</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>Bootstrap</li>
          </>
        );
      case 'Back End':
        return (
          <>
            <li>Node.js</li>
            <li>Express</li>
            <li>Ruby on Rails</li>
            <li>Django</li>
          </>
        );
      case 'Banco de Dados':
        return (
          <>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
          </>
        );
      default:
        return <li>Selecione uma opção para ver os detalhes.</li>;
    }
  };

  return (
    <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow max-w-3xl">
      <h3 className="text-lg font-semibold">Principais Stacks para {stackType}</h3>
      <ul className="list-disc pl-5 mt-2">
        {renderStacks()}
      </ul>
    </div>
  );
};

export default StackDetails;
