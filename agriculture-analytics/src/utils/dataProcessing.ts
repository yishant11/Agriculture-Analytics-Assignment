import { AgricultureData, YearlyAnalysis, CropAnalysis } from '../types/agriculture';
import { RawAgricultureData } from '../data/agriculture';

const extractYear = (yearString: string): number => {
  const match = yearString.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const convertToNumber = (value: string | number): number => {
  if (typeof value === 'number') return value;
  if (value === '') return 0;
  return parseFloat(value) || 0;
};

const transformRawData = (data: RawAgricultureData[]): AgricultureData[] => {
  return data.map(item => ({
    Year: extractYear(item.Year),
    Crop: item["Crop Name"],
    Production: convertToNumber(item["Crop Production (UOM:t(Tonnes))"]),
    Area: convertToNumber(item["Area Under Cultivation (UOM:Ha(Hectares))"]),
    Yield: convertToNumber(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"])
  }));
};

export const processYearlyData = (rawData: RawAgricultureData[]): YearlyAnalysis[] => {
  const data = transformRawData(rawData);
  const yearlyData = new Map<number, AgricultureData[]>();
  
  // Group data by year
  data.forEach(entry => {
    if (!yearlyData.has(entry.Year)) {
      yearlyData.set(entry.Year, []);
    }
    yearlyData.get(entry.Year)?.push(entry);
  });

  // Process each year
  return Array.from(yearlyData.entries()).map(([year, entries]) => {
    const validEntries = entries.filter(entry => entry.Production > 0);
    const maxProduction = validEntries.reduce((max, entry) => 
      entry.Production > max.Production ? entry : max, validEntries[0]);
    const minProduction = validEntries.reduce((min, entry) => 
      entry.Production < min.Production ? entry : min, validEntries[0]);

    return {
      year,
      maxProductionCrop: maxProduction?.Crop || 'N/A',
      minProductionCrop: minProduction?.Crop || 'N/A',
    };
  }).sort((a, b) => a.year - b.year);
};

export const processCropData = (rawData: RawAgricultureData[]): CropAnalysis[] => {
  const data = transformRawData(rawData);
  const cropData = new Map<string, { yields: number[], areas: number[] }>();
  
  // Group data by crop
  data.forEach(entry => {
    if (!cropData.has(entry.Crop)) {
      cropData.set(entry.Crop, { yields: [], areas: [] });
    }
    const cropInfo = cropData.get(entry.Crop);
    if (cropInfo) {
      if (entry.Yield > 0) cropInfo.yields.push(entry.Yield);
      if (entry.Area > 0) cropInfo.areas.push(entry.Area);
    }
  });

  // Calculate averages
  return Array.from(cropData.entries()).map(([crop, info]) => {
    const averageYield = info.yields.length > 0 
      ? info.yields.reduce((sum, val) => sum + val, 0) / info.yields.length 
      : 0;
    const averageArea = info.areas.length > 0
      ? info.areas.reduce((sum, val) => sum + val, 0) / info.areas.length
      : 0;

    return {
      crop,
      averageYield: Number(averageYield.toFixed(3)),
      averageArea: Number(averageArea.toFixed(3)),
    };
  }).sort((a, b) => a.crop.localeCompare(b.crop));
};
