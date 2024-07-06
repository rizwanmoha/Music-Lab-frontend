import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3 ,4 ,5] }]}
      series={[
        {
          data: [4 ,3 ,6 , 2 , 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}