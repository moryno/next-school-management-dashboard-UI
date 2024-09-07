import FormModal from "@/components/FormModal"
import GridComponent from "@/components/GridComponent"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
export type AssignmentType = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
}
const AssignmentListPage = () => {

    const renderRow = useCallback(( record: AssignmentType) => (
        <tr key={record.id} className="border-b border-gray100 even:bg-slate-50 text-[13px] hover:bg-purpleLight">

         <td className="px-3 py-4 font-semibold">{ record.subject }</td>
         <td className="w-[10%] text-center">{ record.class }</td>
         <td className="hidden md:table-cell text-center">{ record.teacher }</td>
         <td className="hidden md:table-cell text-center">{ record.dueDate }</td>
         <td>
            <div className="flex items-center gap-2">
                {
                    role === "admin" && (
                        <>
                        <FormModal table="assignment" type="edit" data={record} />
                        <FormModal table="assignment" type="delete" id={record.id} />
                        </>
                    )
                }
            </div>
         </td>
        </tr>
    ), []);

  return (
    <section className="bg-white p-4 rounded-md shadow-md flex-1 m-4 mt-0">
        <article className="flex items-center justify-between">
            <h1 className="hidden md:block text-sm font-semibold">Assignments</h1>
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
                            <FormModal table="assignment" type="create" />
                        )
                    }

                </div>
            </div>
        </article>
         <GridComponent columns={columns} renderRow={renderRow} datasource={assignmentsData} />
         <Pagination />
    </section>
  )
}

export default AssignmentListPage

const columns = [
    {
        header: "Subject",
        accessor: "subject",
         className: "px-3"
    },
    {
        header: "Class",
        accessor: "class",
         className: "text-center w-[10%]"
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell text-center"
    },
    {
        header: "Due Date",
        accessor: "dueDate",
        className: "hidden md:table-cell text-center"
    },
    {
        header: "Actions",
        accessor: "action"
    }
]