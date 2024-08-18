import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onBackClick }) => {
  // Inicializa o React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Função que será chamada ao enviar o formulário
  const onSubmit = data => {
    console.log('CEP:', data.cep);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="cep">
          CEP:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          id="cep"
          type="text"
          placeholder="Digite o CEP"
          // Registra o input no React Hook Form
          {...register('cep', { required: 'CEP é obrigatório' })}
        />
        {/* Mensagem de erro */}
        {errors.cep && <p className="text-red-500 text-xs italic">{errors.cep.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full w-full"
      >
        Buscar
      </button>
      <button
        type="button"
        onClick={onBackClick}
        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
      >
        Voltar
      </button>
    </form>
  );
};

export default SearchForm;
