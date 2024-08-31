import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeacherListPage = () => {
  return (
    <section className="bg-white p-4 rounded-md shadow-md flex-1 m-4 mt-0">
        <article className="flex items-center justify-between">
            <h1 className="hidden md:block text-sm font-semibold">All Teachers</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky">
                        <Image src="/filter.png" alt="this is a filter icon" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple">
                        <Image src="/sort.png" alt="this is a filter icon" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-completed">
                        <Image src="/plus.png" alt="this is a filter icon" width={14} height={14} />
                    </button>
                </div>
            </div>
        </article>
        <article className="flex items-center justify-between"></article>
        <article className="flex items-center justify-between"></article>
    </section>
  )
}

export default TeacherListPage