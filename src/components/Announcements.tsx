import { MdOpenInNew } from "react-icons/md"

const Announcements = () => {
  return (
    <article className='bg-white rounded-xl w-full h-full p-4 shadow-md'>
    <div className='flex items-center justify-between'>
        <h1 className="font-semibold text-lg text-gray600">Announcements</h1>
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
    <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <div className="font-medium">Midterm Exams</div>
                <span className="text-xs text-gray400 bg-white rounded-md px-1 py-1">2024-10-10</span>
            </div>
            <p className="text-xs text-gray400 mt-1">
            Midterm exams will start next week. Please ensure you are prepared and have all necessary materials. 
            </p>
        </div>
        <div className="bg-purpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <div className="font-medium">School Closed</div>
                <span className="text-xs text-gray400 bg-white rounded-md px-1 py-1">2024-10-14</span>
            </div>
            <p className="text-xs text-gray400 mt-1">
             The school will be closed on Friday for a public holiday. Classes will resume on Monday. 
            </p>
        </div>
        <div className="bg-yellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <div className="font-medium">Field Trip</div>
                <span className="text-xs text-gray400 bg-white rounded-md px-1 py-1">2024-11-01</span>
            </div>
            <p className="text-xs text-gray400 mt-1">
            The annual field trip is scheduled for next month. Permission slips will be distributed soon.
            </p>
        </div>
    </div>
   
  </article>
  )
}

export default Announcements