// Table.js
import React from 'react';

const Table = ({ data }) => {
  // Verifica se há dados para exibir
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Nenhum dado disponível.</p>;
  }

  // Obtém os cabeçalhos da tabela a partir das chaves dos primeiros dados
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            {headers.map((header) => (
              <th key={header} className="px-4 py-2 text-left text-gray-600 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              {headers.map((header) => (
                <td key={header} className="px-4 py-2 text-gray-700">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
