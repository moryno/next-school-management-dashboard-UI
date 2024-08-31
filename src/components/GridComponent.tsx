import React, { ReactNode } from "react"
import { TeacherType } from "@/app/(dashboard)/list/teachers/page";

export type columnType ={
    header: string;
    accessor: string;
    className?: string;
}
interface IProps{
    columns: columnType[];
    renderRow: ( record: TeacherType) => ReactNode;
    datasource: any[]
}
const GridComponent:React.FC<IProps> = ({ columns, renderRow, datasource }) => {
  return (
    <table className="w-full mt-4">
        <thead>
            <tr className="text-left text-gray500 text-xs">
                {columns?.map(col => (
                    <th key={col?.accessor} className={col?.className}>{ col?.header }</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {
                datasource?.map( row => renderRow(row))
            }
        </tbody>
    </table>
  )
}

export default GridComponent