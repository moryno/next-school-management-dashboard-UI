import GridComponent from "@/components/GridComponent"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { classesData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
export type ClassType = {
    id: number;
    name: string;
    capacity: string;
    grade: number;
    classTeacher: string;
}
const ClassListPage = () => {

    const renderRow = useCallback(( record: ClassType) => (
        <tr key={record.id} className="border-b border-gray100 even:bg-slate-50 text-[13px] hover:bg-purpleLight">

         <td className="px-3 py-4 font-semibold">{ record.name }</td>
         <td className="text-center">{ record.capacity }</td>
         <td className="hidden sm:table-cell text-center">{ record.grade }</td>
         <td className="hidden lg:table-cell text-center">{ record.classTeacher }</td>
         <td>
            <div className="flex items-center gap-2">
                <Link href={`/list/teachers/${record.id}`}>
                 <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                    <Image src="/edit.png" alt="this is edit button" width={16} height={16} />
                 </button>
                </Link>
                {
                    role === "admin" && (
                     <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple">
                        <Image src="/delete.png" alt="this is delete button" width={16} height={16} />
                     </button>
                    )
                }
            </div>
         </td>
        </tr>
    ), []);

  return (
    <section className="bg-white p-4 rounded-md shadow-md flex-1 m-4 mt-0">
        <article className="flex items-center justify-between">
            <h1 className="hidden md:block text-sm font-semibold">All Classes</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky">
                        <Image src="/filter.png" alt="this is a filter icon" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple">
                        <Image src="/sort.png" alt="this is a filter icon" width={14} height={14} />
                    </button>
                    {
                        role === "admin" && (
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-completed">
                            <Image src="/plus.png" alt="this is a filter icon" width={14} height={14} />
                        </button>
                        )
                    }

                </div>
            </div>
        </article>
         <GridComponent columns={columns} renderRow={renderRow} datasource={classesData} />
         <Pagination />
    </section>
  )
}

export default ClassListPage

const columns = [
    {
        header: "Class",
        accessor: "name"
    },
    {
        header: "Capacity",
        accessor: "capacity",
         className: "text-center"
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden sm:table-cell text-center"
    },
    {
        header: "Class Teacher",
        accessor: "classTeacher",
        className: "hidden lg:table-cell text-center"
    },
    {
        header: "Actions",
        accessor: "action"
    }
]