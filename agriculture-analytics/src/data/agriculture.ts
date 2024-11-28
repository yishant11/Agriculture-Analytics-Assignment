import * as path from 'path';

export interface RawAgricultureData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

import agricultureJson from './agriculture.json';
export const agricultureData: RawAgricultureData[] = agricultureJson;
