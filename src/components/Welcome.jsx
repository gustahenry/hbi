import React from 'react';

const Welcome = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8 text-white">
        <h1 className='text-6xl font-semibold'>Busca CEP HBI</h1>
        <p className='text-2xl'>18/08/2024</p>
        <button
         onClick={onClick}
         className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full">
        Buscar CEP
        </button>
    </div>
  );
};

export default Welcome;
