import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['December', 'January', 'february' , 'March' , 'April'] }]}
      series={[{ data: [4, 3, 6 , 2 , 5] }]}
      width={500}
      height={300}
      barColors={['#FF6384']} 
      backgroundColor="#000000" 
    />
  );
}