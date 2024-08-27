// components/FixedProgressBar.tsx
import React from 'react';

interface FixedProgressBarProps {
  progress: number; // Percentual de progresso
}

const FixedProgressBar: React.FC<FixedProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        >
          <span className="progress-bar-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default FixedProgressBar;
