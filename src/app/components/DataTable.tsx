import { ReactNode } from 'react';

interface DataTableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
  className?: string;
  highlightColumn?: number;
}

export function DataTable({ headers, rows, className = '', highlightColumn }: DataTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#008080]">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-white font-bold text-sm border border-[#30363d]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-[#161b22]' : 'bg-[#0d1117]'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 text-white border border-[#30363d] ${
                    highlightColumn === cellIndex ? 'font-bold' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
