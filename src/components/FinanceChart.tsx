"use client";

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    income: 4300,
    expense: 3490,
    amt: 2100,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    income: 2780,
    expense: 3908,
    amt: 2100,
  },
  {
    name: 'Oct',
    income: 4300,
    expense: 4800,
  },
  {
    name: 'Nov',
    income: 2100,
    expense: 2400,
  },
  {
    name: 'Dec',
    income: 4300,
    expense: 2400,
  },
];

const FinanceChart = () => {
  return (
    <article className='bg-white rounded-xl w-full h-full p-4 shadow-md'>
    <div className='flex items-center justify-between'>
        <h1 className="font-semibold text-sm text-gray600">Finance</h1>
        <Image src="/more.png" alt="this is ellipses icon" width={20} height={20} />
    </div>
    <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"  />
          <XAxis dataKey="name" axisLine={false}  tick={{ fill: "#d1d5db"}} tickMargin={10} tickLine={false} />
          <YAxis axisLine={false}  tick={{ fill: "#d1d5db"}} tickMargin={10} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor:"lightgray"}} />
          <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingBottom: "30px", paddingTop: "10px"}} />
          <Line type="monotone" dataKey="expense" stroke="#8884d8" strokeWidth={3} />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
  </article>
  )
}

export default FinanceChart