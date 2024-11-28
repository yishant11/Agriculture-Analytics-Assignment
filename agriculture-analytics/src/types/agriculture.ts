export interface AgricultureData {
  Year: number;
  Crop: string;
  Production: number;
  Area: number;
  Yield: number;
}

export interface YearlyAnalysis {
  year: number;
  maxProductionCrop: string;
  minProductionCrop: string;
}

export interface CropAnalysis {
  crop: string;
  averageYield: number;
  averageArea: number;
}
