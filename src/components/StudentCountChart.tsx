"use client";

import Image from 'next/image';
import { MdOpenInNew } from 'react-icons/md';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 668,
    fill: '#fff',
  },
  {
    name: 'Boys',
    count: 312,
    fill: '#c3ebfa',
  },
  {
    name: 'Girls',
    count: 356,
    pv: 2400,
    fill: '#FBC11E',
  },
];
const StudentCountChart = () => {
  return (
    <article className='bg-white rounded-xl w-full h-full p-4 shadow-md'>
        <div className='flex items-center justify-between'>
            <h1 className="font-semibold text-sm text-gray600">Students</h1>
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
        <div className='w-full h-[75%] relative'>
          <ResponsiveContainer>
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
                background
                dataKey="count"
            />
            </RadialBarChart>
         </ResponsiveContainer>
         <Image src="/maleFemale.png" alt='this is boys and girls image' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-sky rounded-full' />
                <h1 className='font-semibold'>{ data[1].count }</h1>
                <h2 className='txt-xs text-gray300'>Boys {`(${Math.round((Number(data[1].count) / Number(data[0].count)) * 100)}%)`}</h2>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-yellow rounded-full' />
                <h1 className='font-semibold'>{ data[2].count }</h1>
                <h2 className='txt-xs text-gray300'>Girls {`(${Math.round((Number(data[2].count) / Number(data[0].count)) * 100)}%)`}</h2>
            </div>
        </div>
    </article>
  )
}

export default StudentCountChart