import { useState, useEffect } from 'react';
import { Container, Title, Space } from '@mantine/core';
import { YearlyAnalysisTable } from './components/YearlyAnalysisTable';
import { CropAnalysisTable } from './components/CropAnalysisTable';
import { processYearlyData, processCropData } from './utils/dataProcessing';
import { agricultureData } from './data/agriculture';
import { YearlyAnalysis, CropAnalysis } from './types/agriculture';

function App() {
  const [yearlyAnalysis, setYearlyAnalysis] = useState<YearlyAnalysis[]>([]);
  const [cropAnalysis, setCropAnalysis] = useState<CropAnalysis[]>([]);

  useEffect(() => {
    setYearlyAnalysis(processYearlyData(agricultureData));
    setCropAnalysis(processCropData(agricultureData));
  }, []);

  return (
    <Container size="lg" py="xl">
      <Title order={1} align="center" mb="xl">Indian Agriculture Analytics (1950-2020)</Title>

      <Title order={2}>Yearly Production Analysis</Title>
      <Space h="md" />
      <YearlyAnalysisTable data={yearlyAnalysis} />
      
      <Space h="xl" />
      
      <Title order={2}>Crop Analysis (1950-2020)</Title>
      <Space h="md" />
      <CropAnalysisTable data={cropAnalysis} />
    </Container>
  );
}

export default App;
