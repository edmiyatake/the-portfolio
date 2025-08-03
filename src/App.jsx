import React from 'react';
import DarkLightButton from './components/ToggleButton';
import ToggleButton from './components/ToggleButton';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <ToggleButton label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;