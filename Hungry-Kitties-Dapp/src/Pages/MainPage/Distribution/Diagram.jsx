import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Box from '../../../Styled-Components/Box';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Shelters', 'Ecosystem', 'Team'],
  datasets: [
    {
      label: 'Distribution of funds from events in %',
      data: [90, 5, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Diagram = () => {
  return (
    <Box width = "45%" height = "45%">
      <Doughnut data={data} />
    </Box>
  );
};

export default Diagram;