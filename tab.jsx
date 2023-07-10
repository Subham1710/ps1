import React, { useState } from 'react';

function TabButton() {
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle button click and initiate data fetching
  const fetchData = () => {
    setIsLoading(true);

    // Simulating the delay for data fetching
    setTimeout(() => {
      setIsLoading(false);
      console.log('Data loaded successfully!');
    }, 2000); // 2 seconds delay, replace with your actual data loading time
  };

  return (
    <button onClick={fetchData} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Tab Button'}
    </button>
  );
}

export default TabButton;
