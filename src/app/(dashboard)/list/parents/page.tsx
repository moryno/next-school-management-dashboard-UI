import FormModal from "@/components/FormModal"
import GridComponent from "@/components/GridComponent"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { parentsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
export type ParentType = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
}
const ParentListPage = () => {

    const renderRow = useCallback(( record: ParentType) => (
        <tr key={record.id} className="border-b border-gray100 even:bg-slate-50 text-[13px] hover:bg-purpleLight">

         <td className="px-3 py-4 font-semibold">{ record.name }</td>
         <td className="hidden md:table-cell text-inProgress">{ record.email }</td>
         <td className="hidden md:table-cell">{ record.students.join(", ") }</td>
         <td className="hidden lg:table-cell text-inProgress">{ record.phone }</td>
         <td className="hidden lg:table-cell">{ record.address }</td>
         <td>
            <div className="flex items-center gap-2">
                {
                    role === "admin" && (
                        <>
                        <FormModal table="parent" type="edit" data={record} />
                        <FormModal table="parent" type="delete" id={record.id} />
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
            <h1 className="hidden md:block text-sm font-semibold">All Parents</h1>
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
                            <FormModal table="parent" type="create" />
                        )
                    }

                </div>
            </div>
        </article>
         <GridComponent columns={columns} renderRow={renderRow} datasource={parentsData} />
         <Pagination />
    </section>
  )
}

export default ParentListPage

const columns = [
    {
        header: "Parent Name",
        accessor: "name",
         className: "px-3"
    },
    {
        header: "Email",
        accessor: "email",
         className: "hidden md:table-cell"
    },
    {
        header: "Student Name",
        accessor: "students",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell"
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