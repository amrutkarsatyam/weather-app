import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const WeatherChart = ({ days }) => {
  const labels = days.map(d => d.datetime);
  const temps = days.map(d => d.temp);

  const data = {
    labels,
    datasets: [
      {
        // label: 'Temperature (°C)',
        data: temps,
        // fill: false,
      }
    ],
  };

  return (
    <div>
      <h3>Weather Trend</h3>
      <Line data={data} />
    </div>
  );
};

export default WeatherChart;
