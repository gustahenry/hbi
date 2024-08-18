import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Welcome from './components/Welcome';

function App() {

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
  };
  
  return (
    <div className="flex flex-col justify-center items-center space-y-8 text-white">
        {!showForm ? (
          <Welcome onClick={handleButtonClick} />
         ) : (
          <SearchForm onBackClick={handleBackClick} />
        )}
    </div>
  )

}

export default App
