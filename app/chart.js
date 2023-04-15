import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, options, width, height }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      // Update chart instance with new data
      chartInstance.current.data.datasets = data.datasets;
      chartInstance.current.update();
    } else {
      // Create new chart instance
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line',
        data: data,
        options: options,
      });
    }
  }, [data, options]);

  useEffect(() => {
    // Set the width and height of the canvas element
    if (chartContainer.current) {
      chartContainer.current.style.width = `${width}px`;
      chartContainer.current.style.height = `${height}px`;
    }
  }, [width, height]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChart;
