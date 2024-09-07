"use client";

import { RiAdminFill, RiParentFill  } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import Link from "next/link";
import { DomianEnum } from "@/enums";
import { setLocalData } from "@/helpers/commonFn";
import { useRouter } from "next/navigation";

const DemoSignInPage = () => {
    const router = useRouter();

    const onRedirect = (user: any) => {  
        let link = "";
        let currentUser = {
            fullName: "Diana Nyambura",
            email: "deedendrik@gmail.com",
            phone: "+1 452 789 091",
            image: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
            username: "deedendrik",
            address: "Winden",
            role: "admin"
        }
        switch (user) {
            case DomianEnum.ADMIN:
                link = "admin";
                break;
            case DomianEnum.TEACHER:
                link = "list/teachers";
                currentUser ={ ...currentUser, role: "teacher"};
                break;
            case DomianEnum.STUDENT:
                link = "list/students/1";
                currentUser ={ ...currentUser, role: "student"};
                break;
            case DomianEnum.PARENT:
                link = "parent"
                currentUser ={ ...currentUser, role: "parent"}
                break;
            default:
                break;
        }
        if (typeof window !== 'undefined') { 
            setLocalData("currentUser", JSON.stringify(currentUser));
    
            router.push(`/${link}`);
        }
    };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#eee]">
      <article className="bg-white rounded-md shadow-md p-4 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[25%]">
        <div className="flex flex-col gap-8">
          <h1 className="text-lg font-semibold text-center">Demo User Login</h1>
          <div className="flex flex-wrap justify-between gap-8">
            <div onClick={() => onRedirect(DomianEnum.ADMIN)} className="flex flex-col items-center w-1/3 cursor-pointer">
                <RiAdminFill className="text-6xl" />
                <span className="text-[15px] font-medium">Admin</span>
            </div>
            <div onClick={() => onRedirect(DomianEnum.TEACHER)} className="flex flex-col items-center w-1/3 cursor-pointer">
                <GiTeacher className="text-cancelled text-6xl" />
                <span className="text-[15px] text-cancelled font-medium">Teacher</span>
            </div>
            <div onClick={() => onRedirect(DomianEnum.STUDENT)} className="flex flex-col items-center w-1/3 cursor-pointer">
                 <PiStudentFill className="text-inProgress text-6xl" />
                <span className="text-[15px] text-inProgress font-medium">Student</span>
            </div>
            <div onClick={() => onRedirect(DomianEnum.PARENT)} className="flex flex-col items-center w-1/3 cursor-pointer">
                <RiParentFill className="text-active text-6xl" />
                <span className="text-[15px] font-medium text-active">Parent</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start sm:items-center">
            <p className="text-sm text-gray500">Have an account? <Link className="text-inProgress underline" href={"/sign-in"}>Sign In</Link></p>
            <p className="text-sm text-gray500">Create an account? <Link className="text-inProgress underline" href={"/sign-in"}>Sign Up</Link></p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default DemoSignInPage