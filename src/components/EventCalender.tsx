"use client";

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md shadow-md'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold my-4'>Events</h1>
            <Image src="/moreDark.png" alt="this is ellipses icon" width={20} height={20} />
        </div>
        <div className='flex flex-col gap-4'>
            {events.map((event) => (
                <div className='p-5 rounded-md border-2 border-gray100 border-t-4 odd:border-t-sky even:border-t-purple' key={event.id}>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray600'>{ event.title }</h1>
                        <span className='text-gray300 text-xs'>{ event.time }</span>
                    </div>
                    <p className='mt-2 text-gray400 text-sm'>{ event.description }</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalender
const events = [
    {
      id: 1,
      title: "Science Fair",
      time: "10:00am - 12:00pm",
      description: "A showcase of student science projects and experiments."
    },
    {
      id: 2,
      title: "Sports Day",
      time: "1:00pm - 4:00pm",
      description: "An afternoon of various athletic competitions and games."
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      time: "6:00pm - 8:00pm",
      description: "A meeting for parents to discuss their child's progress with teachers."
    }
  ];
  