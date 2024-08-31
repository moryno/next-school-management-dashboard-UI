import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <section className='p-4 flex gap-4 flex-col xl:flex-row shadow-md'>
      <article className="w-full xl:w-2/3">
       <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-lg font-semibold">Schedule (4A)</h1>
        <BigCalendar />
       </div>
      </article>
      <article className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </article>
  </section>
  )
}

export default StudentPage