
import './performance.css'
import { arrow, date } from '../../../Assets'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Function to convert time strings to minutes
const convertTimeToMinutes = (timeString) => {
  const [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':');
  hours = parseInt(hours, 10);
  minutes = minutes ? parseInt(minutes, 10) : 0;
  if (modifier === 'PM' && hours < 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

// Custom tickFormatter for YAxis
const formatTicks = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};

// Data with time strings converted to minutes
const data = [
  {
    name: 'Mon',
    uv: '10 AM',
    pv: '6 PM',
  },
  {
    name: 'Tue',
    uv: '9 AM',
    pv: '5 PM',
  },
  {
    name: 'Wed',
    uv: '3 AM',
    pv: '2 PM',
  },
  {
    name: 'Thu',
    uv: '8 PM',
    pv: '8 PM',
  },
  {
    name: 'Fri',
    uv: '11:30 AM',
    pv: '7 PM',
  },
  {
    name: 'Sat',
    uv: '2 PM',
    pv: '2 PM',
  },
  {
    name: 'Sun',
    uv: '5 AM',
    pv: '8 AM',
  },
  {
    name: 'Mon',
    uv: '8 AM',
    pv: '8 PM',
  },
].map(entry => ({
  ...entry,
  uv: convertTimeToMinutes(entry.uv),
  pv: convertTimeToMinutes(entry.pv),
}));
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const start = payload[0].value; // 'uv' value
    const end = payload[1].value; // 'pv' value

    // Function to format minutes back to time string
    const formatMinutesToTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const amPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = mins.toString().padStart(2, '0');
      return `${formattedHours}:${formattedMinutes} ${amPm}`;
    };

    return (
      <div className="custom-tooltip" style={tooltipStyles}>
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Pv: ${formatMinutesToTime(start)}`}</p>
        <p className="desc">{`Uv: ${formatMinutesToTime(end)}`}</p>
      </div>
    );
  }

  return null;
};

const tooltipStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  color: '#333',
  fontSize: '14px',
  fontFamily: 'inter',
};
const Performance = () => {


  return (
    <div className='performance'>
      <div className="head">
        <div>
          <p>Performance</p>
        </div>
        <div className="controle">
          <img className='date' src={date} alt="" />
          <div><p>This Week</p></div>
          <img className='arrow' src={arrow} alt="" />
        </div>
      </div>

      <div className="bar-chart-container">

        <BarChart
          width={650}
          height={280}
          data={data}
          margin={{
            top: 20,
            right: 5,
            bottom: 5,
            left: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="42%" stop-color="#c0a1ff" />
              <stop offset="100%" stop-color="#9967ff" />
            </linearGradient>
            <linearGradient id="colorUv2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="42%" stop-color="#ff70bc" />
              <stop offset="100%" stop-color="#ffbd67" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name"
            strokeWidth={0}
            style={{
              fontSize: '11px',
              fontFamily: 'inter',

            }}
            padding={{ left: 30, right: 0 }} />
          <YAxis
            tickFormatter={formatTicks}
            strokeDasharray="3 3"
            type='number'
            strokeWidth={0}
            style={{
              fontSize: '11px',
              fontFamily: 'inter',
            }}

          />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="pv" barSize={10} fill="url(#colorUv)" radius={[10, 10, 0, 0]} />
          <Bar dataKey="uv" barSize={10} fill="url(#colorUv2)" radius={[10, 10, 0, 0]} />
        </BarChart>
      </div>
    </div>
  )
}

export default Performance
