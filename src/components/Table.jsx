import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="hidden sm:table-header-group">
            <tr className="bg-gray-100 border-b border-gray-200">
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 text-left text-gray-600 font-semibold text-xs md:text-sm lg:text-base">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                {headers.map((header) => (
                  <td key={header} className="px-4 py-2 text-gray-700 text-xs md:text-sm lg:text-base border-b border-gray-200">
                    <span className="block sm:hidden font-semibold">{header}:</span>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
