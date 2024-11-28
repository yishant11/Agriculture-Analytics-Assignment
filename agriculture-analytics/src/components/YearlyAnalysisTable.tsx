import { YearlyAnalysis } from '../types/agriculture';

interface Props {
  data: YearlyAnalysis[];
}

export function YearlyAnalysisTable({ data }: Props) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop with Maximum Production</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.year} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.year}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.maxProductionCrop}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.minProductionCrop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
