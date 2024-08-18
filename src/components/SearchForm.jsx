import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onBackClick }) => {
  // Inicializa o React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Função chamada ao enviar o formulário
  const onSubmit = data => {
    console.log('Dados do formulário:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-4 lg:m-auto md:mx-8 sm:mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white text-black p-6 rounded-lg shadow-lg mx-auto max-w-4xl">
        {/* Container para os campos */}
        <div className="flex flex-wrap mx-2 mt-28 lg:mt-0 md:mt-0">
          {/* Campo Nome */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nome:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register('name', { required: 'Nome é obrigatório' })}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>

          {/* Campo E-mail */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              E-mail:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email', { required: 'E-mail é obrigatório' })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          {/* Campo Data de Nascimento */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="dob">
              Data de Nascimento:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="dob"
              type="date"
              {...register('dob', { required: 'Data de nascimento é obrigatória' })}
            />
            {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob.message}</p>}
          </div>

          {/* Campo Celular */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Celular:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="phone"
              type="tel"
              placeholder="Digite seu celular"
              {...register('phone', { required: 'Celular é obrigatório' })}
            />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
          </div>

          {/* Campo CEP */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="cep">
              CEP:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="cep"
              type="text"
              placeholder="Digite o CEP"
              {...register('cep', { required: 'CEP é obrigatório' })}
            />
            {errors.cep && <p className="text-red-500 text-xs italic">{errors.cep.message}</p>}
          </div>

          {/* Campo Endereço */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="address">
              Endereço:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="address"
              type="text"
              placeholder="Digite o endereço"
              {...register('address', { required: 'Endereço é obrigatório' })}
            />
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
          </div>

          {/* Campo Número */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="number">
              Número:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="number"
              type="text"
              placeholder="Número"
              {...register('number', { required: 'Número é obrigatório' })}
            />
            {errors.number && <p className="text-red-500 text-xs italic">{errors.number.message}</p>}
          </div>

          {/* Campo Bairro */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="neighborhood">
              Bairro:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="neighborhood"
              type="text"
              placeholder="Digite o bairro"
              {...register('neighborhood', { required: 'Bairro é obrigatório' })}
            />
            {errors.neighborhood && <p className="text-red-500 text-xs italic">{errors.neighborhood.message}</p>}
          </div>

          {/* Campo Cidade */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="city">
              Cidade:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="city"
              type="text"
              placeholder="Digite a cidade"
              {...register('city', { required: 'Cidade é obrigatória' })}
            />
            {errors.city && <p className="text-red-500 text-xs italic">{errors.city.message}</p>}
          </div>

          {/* Campo UF */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="state">
              UF:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="state"
              type="text"
              placeholder="Digite o UF"
              {...register('state', { required: 'UF é obrigatório' })}
            />
            {errors.state && <p className="text-red-500 text-xs italic">{errors.state.message}</p>}
          </div>
        </div>

        {/* Container para os botões */}
        <div className="flex flex-wrap gap-4 mt-4 justify-start">
          <button
            type="submit"
            className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Buscar
          </button>
          <button
            type="button"
            onClick={onBackClick}
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
