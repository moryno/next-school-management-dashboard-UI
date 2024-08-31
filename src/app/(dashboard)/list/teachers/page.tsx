import GridComponent from "@/components/GridComponent"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { role, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
export type TeacherType = {
    id: number;
    teacherNo: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
}
const TeacherListPage = () => {

    const renderRow = useCallback(( record: TeacherType) => (
        <tr key={record.id} className="border-b border-gray100 even:bg-slate-50 text-[13px] hover:bg-purpleLight">
         <td className="flex items-center gap-4 px-4 py-3">
            <Image 
             src={record.photo} 
             alt={record.name} 
             width={40} 
             height={40} 
             className="md:hidden xl:block w-10 h-10 rounded-full object-cover" 
            />
            <div className="flex flex-col">
                <h3 className="font-semibold">{ record.name }</h3>
                <p className="text-xs text-gray500">{ record.email }</p>
            </div>
         </td>
         <td className="hidden md:table-cell text-inProgress">{ record.teacherNo }</td>
         <td className="hidden md:table-cell">{ record.subjects.join(",") }</td>
         <td className="hidden md:table-cell">{ record.classes.join(",") }</td>
         <td className="hidden lg:table-cell text-inProgress text-center">{ record.phone }</td>
         <td className="hidden lg:table-cell">{ record.address }</td>
         <td>
            <div className="flex items-center gap-2">
                <Link href={`/list/teachers/${record.id}`}>
                 <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                    <Image src="/view.png" alt="this is view button" width={16} height={16} />
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
         <GridComponent columns={columns} renderRow={renderRow} datasource={teachersData} />
         <Pagination />
    </section>
  )
}

export default TeacherListPage

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Teacher No.",
        accessor: "teacherNo",
        className: "hidden md:table-cell"
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell"
    },
    {
        header: "Classes",
        accessor: "classes",
         className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell text-center"
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions",
        accessor: "action"
    }
]