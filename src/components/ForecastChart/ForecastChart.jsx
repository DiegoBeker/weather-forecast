import { LineChart, Line, XAxis, YAxis } from 'recharts';
import PropTypes from "prop-types";

function ForecastChart({ data }) {
  return (
    <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 40, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="temp" stroke="#f14b21" />
    <XAxis dataKey="date" />
    <YAxis />
  </LineChart>
  ); 
}

ForecastChart.propTypes = {
   data: PropTypes.object
}

export default ForecastChart;