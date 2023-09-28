import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import PropTypes from "prop-types";
import { Chart } from './style';

function ForecastChart({ data }) {
  return (
    <Chart>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 40, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="temp" stroke="#f14b21" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </Chart>
  );
}

ForecastChart.propTypes = {
  data: PropTypes.object
}

export default ForecastChart;