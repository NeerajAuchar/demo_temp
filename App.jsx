
import './App.css';
import {csv} from 'd3'
import { ResponsiveContainer, LineChart, Line , XAxis , YAxis , Legend  ,Tooltip , Brush} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function App() {
  return (
    <div className="App">
      <h1 className='chart-heading'>Line Chart</h1>
      <ResponsiveContainer width="100%"aspect={3}>
        <LineChart data={data} >
          <XAxis  dataKey="name" interval={"preserveStartEnd"}/>
          <YAxis  />
          <Legend />
          <Tooltip />
         
        <Line dataKey="uv" />
        <Line dataKey="pv" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
