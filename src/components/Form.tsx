import React from "react"
import { IFormProps } from "./FormModal"
import dynamic from "next/dynamic";

type IProp =IFormProps & {
  toggleModal: () => void;
}

const TeacherForm = dynamic(() => import("./forms/TeacherForm"),{
  loading: () =>  <h1>Loading...</h1>
});
const StudentForm = dynamic(() => import("./forms/StudentForm"),{
  loading: () =>  <h1>Loading...</h1>
});

const forms: {
  [key: string]: (type: "create" | "edit", toggleModal:() => void, data?:any ) => JSX.Element
} = {
  teacher: (type, data, toggleModal) => <TeacherForm type={type} toggleModal={toggleModal}  data={data} />,
  student: (type, data, toggleModal) => <StudentForm type={type} toggleModal={toggleModal}  data={data} />
}
const Form:React.FC<IProp> = ({  table, type, id, toggleModal, data  }) => {
  return type === "delete" && id ? (
    <form action="" className="p-4 flex flex-col gap-4">
        <p className="text-center font-medium">All data will be lost. Are you sure you want to delete this { table }?</p>
        <div className="flex items-center justify-center gap-5">
            <button onClick={toggleModal} className="bg-white font-semibold text-inProgress py-2 px-4 rounded-md border-none ring ring-inProgress w-max">No</button>
            <button className="bg-white font-semibold text-cancelled py-2 px-4 rounded-md border-none ring ring-cancelled w-max">Yes</button>
        </div>
    </form>
  ) : type === "create" || type === "edit" ? (
    forms[table](type, toggleModal, data)
  ) :
  "Form not found"
}

export default Form