"use client";

import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";

export interface IFormProps{
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
    type: "create" | "delete" | "edit"
    data?: any;
    id?: number;
}
const FormModal:React.FC<IFormProps> = ({ table, type, data, id }) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-completed" : type === "edit" ? "bg-sky" : "bg-purple";
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpen(prev => !prev)
    }


  return (
    <>
    <button onClick={toggleModal} className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
         <Image src={`/${type}.png`} alt={`this is a ${type} icon`} width={16} height={16} />
    </button>
    {isOpen && 
      <section className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
        <article className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form table={table} type={type} id={id} toggleModal={toggleModal} />
            <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleModal}>
                <Image src="/close.png" alt="this is a close icon" width={14} height={14} />
            </div>
        </article>
      </section>
    }
    </>
  )
}

export default FormModal