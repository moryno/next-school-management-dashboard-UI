import Announcements from "@/components/Announcements"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import StudentAttendanceChart from "@/components/StudentAttendanceChart"
import StudentCountChart from "@/components/StudentCountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <section className='p-4 flex gap-4 flex-col md:flex-row'>
      <article className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <StudentCountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <StudentAttendanceChart />
          </div>
        </div>
        <div className="w-full h-full">
          <FinanceChart />
        </div>
      </article>
      <article className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </article>
    </section>
  )
}

export default AdminPage