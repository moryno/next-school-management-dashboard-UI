"use client";
import { MdOpenInNew } from "react-icons/md";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 100,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 103,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 11,
  },
  {
    name: 'Thu',
    present: 108,
    absent: 43,
  },
  {
    name: 'Fri',
    present: 90,
    absent: 80,
  }
];

const StudentAttendanceChart = () => {
  return (
  <article className='bg-white rounded-xl w-full h-full p-4 shadow-md'>
    <div className='flex items-center justify-between'>
        <h1 className="font-semibold text-sm text-gray600">Attendance</h1>
        <span className="flex items-center gap-1 cursor-pointer">
        {" "}
        <MdOpenInNew className="text-menuText" />
        <span
        //   onClick={() => history.push(`/${url}`)}
          className="text-xs text-[#0176d3] hover:cursor-pointer hover:underline"
        >
          {" "}
          Show all
        </span>
      </span>
    </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor:"lightgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingBottom: "30px", paddingTop: "10px"}} />
          <Bar dataKey="present" fill="#4ED3E5" legendType="circle" radius={[10,10, 0,0]} activeBar={<Rectangle fill="#2CC8BA" stroke="#08AEEA" />} />
          <Bar dataKey="absent" fill="#A593FF" legendType="circle" radius={[10,10, 0,0]} activeBar={<Rectangle fill="#08AEEA" stroke="#A593FF" />} />
        </BarChart>
      </ResponsiveContainer>
</article>
  )
}

export default StudentAttendanceChart