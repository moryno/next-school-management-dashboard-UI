import FormModal from "@/components/FormModal"
import GridComponent from "@/components/GridComponent"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
export type SubjectType = {
    id: number;
    name: string;
    teachers: string[];
    compulsory: boolean;
}
const SubjectListPage = () => {

    const renderRow = useCallback(( record: SubjectType) => (
        <tr key={record.id} className="border-b border-gray100 even:bg-slate-50 text-[13px] hover:bg-purpleLight">

         <td className="px-3 py-4 font-semibold">{ record.name }</td>
         <td className={`hidden md:table-cell text-center  w-[8%] ${record.compulsory ? "bg-completed" : "bg-inProgress"} text-white`}>{ record.compulsory ? "YES" : "NO" }</td>
         <td className="hidden md:table-cell px-4">{ record.teachers.join(", ") }</td>
         <td>
            <div className="flex items-center gap-2">
                {
                    role === "admin" && (
                        <>
                        <FormModal table="subject" type="edit" data={record} />
                        <FormModal table="subject" type="delete" id={record.id} />
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
            <h1 className="hidden md:block text-sm font-semibold">All Subjects</h1>
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
                            <FormModal table="subject" type="create" />
                        )
                    }

                </div>
            </div>
        </article>
         <GridComponent columns={columns} renderRow={renderRow} datasource={subjectsData} />
         <Pagination />
    </section>
  )
}

export default SubjectListPage

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
         className: "px-3"
    },
    {
        header: "Compulsory",
        accessor: "compulsory",
        className: "hidden md:table-cell text-center w-[8%]"
    },
    {
        header: "Teachers",
        accessor: "email",
         className: "hidden md:table-cell px-4"
    },

]