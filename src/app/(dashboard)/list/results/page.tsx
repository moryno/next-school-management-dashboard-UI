import FormModal from "@/components/FormModal"
import GridComponent from "@/components/GridComponent"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { resultsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
export type ResultType = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    date: string;
    type: "exam" | "assignment";
    score: number;
}
const ResultListPage = () => {

    const renderRow = useCallback(( record: ResultType) => (
        <tr key={record.id} className="border-b border-gray100 even:bg-slate-50 text-[13px] hover:bg-purpleLight">
         <td className="px-3 py-4 font-semibold">{ record.subject }</td>
         <td className="w-[10%] text-center">{ record.class }</td>
         <td className="hidden md:table-cell">{ record.teacher }</td>
         <td className="hidden md:table-cell">{ record.student }</td>
         <td className="hidden lg:table-cell capitalize">{ record.type }</td>
         <td className="hidden lg:table-cell text-center">{ record.score }</td>
         <td className="hidden lg:table-cell text-center">{ record.date }</td>
         <td>
            <div className="flex items-center gap-2">
                <Link href={`/list/teachers/${record.id}`}>
                 <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                    <Image src="/edit.png" alt="this is edit button" width={16} height={16} />
                 </button>
                </Link>
                {
                    role === "admin" && (
                        <>
                        <FormModal table="result" type="edit" data={record} />
                        <FormModal table="result" type="delete" id={record.id} />
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
            <h1 className="hidden md:block text-sm font-semibold">Results</h1>
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
                            <FormModal table="result" type="create" />
                        )
                    }

                </div>
            </div>
        </article>
         <GridComponent columns={columns} renderRow={renderRow} datasource={resultsData} />
         <Pagination />
    </section>
  )
}

export default ResultListPage

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
        className: "hidden md:table-cell"
    },
    {
        header: "Student",
        accessor: "student",
        className: "hidden md:table-cell"
    },
    {
        header: "Type",
        accessor: "type",
        className: "hidden lg:table-cell"
    },
    {
        header: "Score",
        accessor: "score",
        className: "hidden lg:table-cell text-center"
    },
 
    {
        header: "Date",
        accessor: "date",
        className: "hidden lg:table-cell text-center"
    },
    {
        header: "Actions",
        accessor: "action"
    }
]