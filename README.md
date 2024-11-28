# Agriculture Analytics Dashboard

This project analyzes Indian Agriculture dataset from the National Data and Analytics Platform (NITI Aayog) and displays the results in tabular format.

## Features

1. Yearly Analysis Table showing:
   - Year
   - Crop with Maximum Production
   - Crop with Minimum Production

2. Crop Analysis Table showing:
   - Crop name
   - Average Yield between 1950-2020
   - Average Cultivation Area between 1950-2020

## Tech Stack

- TypeScript
- React
- Vite
- Mantine v7

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The application will open automatically in your default browser.

## Project Structure

```
src/
├── components/
│   ├── YearlyAnalysisTable.tsx
│   └── CropAnalysisTable.tsx
├── types/
│   └── agriculture.ts
├── utils/
│   └── dataProcessing.ts
└── App.tsx
```

## Screenshots

These are attached to Screenshots Folder

## Implementation Details

- All calculations are performed efficiently using optimized data structures
- Missing values in the dataset are treated as 0
- Average values are rounded to 3 decimal places
- The application uses Mantine v7 for table components
- No additional UI libraries are used
