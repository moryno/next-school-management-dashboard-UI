import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
  return (
    <section className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        <section className="w-full xl:w-2/3">
          <article className="flex flex-col lg:flex-row gap-4">
            <article className="bg-sky py-6 px-4 rounded-md shadow-md flex-1 flex gap-4">
                <div className="w-1/3">
                 <Image 
                   src="https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="this is Student photo"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full object-cover"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                  <h1 className="text-lg font-semibold">Jane Snyder</h1>
                  <p className="text-sm text-gray500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                     <Image src="/blood.png" alt="this is blood icon" width={14} height={14} />
                     <span>A+</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                     <Image src="/date.png" alt="this is date icon" width={14} height={14} />
                     <span>January 2025</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                     <Image src="/mail.png" alt="this is mail icon" width={14} height={14} />
                     <span>jsnyder@gmail.com</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                     <Image src="/phone.png" alt="this is phone icon" width={14} height={14} />
                     <span>+254 716 654</span>
                    </div>
                  </div>
                </div>
            </article>
            <article className="flex-1 flex gap-4 justify-between flex-wrap">
                <div className="bg-white p-4 rounded-md shadow-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src="/singleAttendance.png" alt="this is attendace icon" width={24} height={24} className="w-6 h-6" />
                    <div className="">
                        <h1 className="text-lg font-semibold">90%</h1>
                        <span className="text-xs text-gray400">Attendance</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src="/singleBranch.png" alt="this is branch icon" width={24} height={24} className="w-6 h-6" />
                    <div className="">
                        <h1 className="text-lg font-semibold">7th</h1>
                        <span className="text-xs text-gray400">Grade</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src="/singleLesson.png" alt="this is branch icon" width={24} height={24} className="w-6 h-6" />
                    <div className="">
                        <h1 className="text-lg font-semibold">16</h1>
                        <span className="text-xs text-gray400">Lessons</span>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src="/singleClass.png" alt="this is branch icon" width={24} height={24} className="w-6 h-6" />
                    <div className="">
                        <h1 className="text-lg font-semibold">7C</h1>
                        <span className="text-xs text-gray400">Class</span>
                    </div>
                </div>
            </article>
          </article>
          <article className="mt-4 bg-white rounded-md p-4 h-full shadow-md">
                <h1 className="text-lg text-gray500">Student&apos;s Schedule</h1>
                <BigCalendar />
            </article>
        </section>
        <section className="w-full xl:w-1/3 flex flex-col gap-4">
            <article className="bg-white p-4 shadow-md rounded-md">
                <h1 className="text-lg font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray500">
                    <Link href="/" className="p-3 rounded-md bg-skyLight">Student&apos;s Classes</Link>
                    <Link href="/" className="p-3 rounded-md bg-purpleLight">Student&apos;s Teachers</Link>
                    <Link href="/" className="p-3 rounded-md bg-pink-50">Student&apos;s Exams</Link>
                    <Link href="/" className="p-3 rounded-md bg-skyLight">Student&apos;s Assignments</Link>
                    <Link href="/" className="p-3 rounded-md bg-yellowLight">Student&apos;s Results</Link>
                </div>
            </article>
            <Performance />
            <Announcements />
        </section>
    </section>
  )
}

export default SingleStudentPage