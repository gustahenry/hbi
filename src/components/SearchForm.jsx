import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Table from './Table';
import axios from 'axios';
import InputMask from 'react-input-mask';

const SearchForm = ({ onBackClick }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  
  // Estado para armazenar os dados da tabela
  const [tableData, setTableData] = useState([]);

  // Função para buscar o endereço pelo CEP
  const fetchAddress = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      // Atualiza os campos do formulário com os dados da API
      setValue('address', logradouro);
      setValue('neighborhood', bairro);
      setValue('city', localidade);
      setValue('state', uf);
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
    }
  };

  const onSubmit = data => {
    
    setTableData(prevData => [
      ...prevData,
      {
        Nome: data.name,
        Email: data.email,
        'Data de Nascimento': data.dob,
        Celular: data.phone,
        Endereço: `${data.address}, ${data.number}, ${data.neighborhood}, ${data.city} - ${data.state}`,
      }
    ]);

    reset();
  };


  const handleCepChange = (e) => {
    const cep = e.target.value;

    const cepFormatted = cep.replace(/\D/g, '');

     if (cepFormatted.length === 8) {
      fetchAddress(cepFormatted);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white text-black p-6 rounded-lg shadow-lg mx-auto max-w-4xl">
        <div className="flex flex-wrap mx-2 mt-28 lg:mt-0 md:mt-0">
          {/* Campos do formulário */}
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

          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Celular:
            </label>
            <InputMask
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="phone"
              mask="(99)99999-9999"
              placeholder="Digite seu celular"
              {...register('phone', { required: 'Celular é obrigatório' })}
            />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="cep">
              CEP:
            </label>
            <InputMask
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="cep"
              mask="99999-999"
              placeholder="Digite o CEP"
              {...register('cep', { required: 'CEP é obrigatório' })}
              onChange={handleCepChange}
            />
            {errors.cep && <p className="text-red-500 text-xs italic">{errors.cep.message}</p>}
          </div>

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

        <div className="flex flex-wrap justify-end mt-4">
          <button
            type="button"
            onClick={onBackClick}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Adicionar
          </button>
        </div>
      </form>

      {/* Tabela para exibir os dados */}
      <Table data={tableData} />
    </div>
  );
};

export default SearchForm;
