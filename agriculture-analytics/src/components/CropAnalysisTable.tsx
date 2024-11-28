import { CropAnalysis } from '../types/agriculture';

interface Props {
  data: CropAnalysis[];
}

export function CropAnalysisTable({ data }: Props) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Yield (1950-2020)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Cultivation Area (1950-2020)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.crop} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.crop}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.averageYield}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.averageArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
