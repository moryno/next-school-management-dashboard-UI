"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
    username: z.string().min(1, { message: 'Username must be atleast 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
    age: z.number().min(10),
    email: z.string().email({ message: "Invalid email address!"}),
    password: z.string().min(6, { message: "Password must be atleast 6 characters long!"}),
    firstName: z.string().min(1, { message: "First name is required!"}),
    lastName: z.string().min(1, { message: "Last name is required!"}),
    phone: z.string().min(1, { message: "Phone is required!"}),
    address: z.string().min(1, { message: "Address is required!"}),
    dateOfBirth: z.date({ message: "Date of birt is required!"}),
    gender: z.enum(["male", "female"], { message: "Gender is required!"}),
    bloodType: z.string().min(1, { message: "Blood type is required!"}),
    image: z.instanceof(File, { message: "Image is required!"})
  });
  
type Inputs = z.infer<typeof schema>;
type IProp =  {
  toggleModal: () => void;
  data?: any;
  type: string;
}

const StudentForm = ({ type, data, toggleModal } : IProp) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });
   const onSubmit = handleSubmit((data) => {
    console.log(data)
   })
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-lg font-semibold">Create a new student</h1>
        <span className="text-xs text-active font-medium">Authentication Information</span>
        <div className="flex justify-between flex-wrap gap-4">
        <InputField
            label="Username"
            name="username"
            defaultValue={data?.username}
            register={register}
            error={errors?.username}
         />
        <InputField
            label="Email"
            name="email"
            type="email"
            defaultValue={data?.email}
            register={register}
            error={errors?.email}
         />
        <InputField
            label="Password"
            name="password"
            type="password"
            defaultValue={data?.password}
            register={register}
            error={errors?.password}
         />
      </div>
      <span className="text-xs text-active font-medium">Personal Information</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
            label="First Name"
            name="firstName"
            defaultValue={data?.firstName}
            register={register}
            error={errors?.firstName}
         />
        <InputField
            label="Last Name"
            name="lastName"
            defaultValue={data?.lastName}
            register={register}
            error={errors?.lastName}
         />
        <InputField
            label="Phone"
            name="phone"
            defaultValue={data?.phone}
            register={register}
            error={errors?.phone}
         />
        <InputField
            label="Address"
            name="address"
            defaultValue={data?.address}
            register={register}
            error={errors?.address}
         />
        <InputField
            label="Gender"
            name="gender"
            defaultValue={data?.gender}
            register={register}
            error={errors?.gender}
         />
        <InputField
            label="Date Of Birth"
            name="dateOfBirth"
            type="date"
            defaultValue={data?.dateOfBirth}
            register={register}
            error={errors?.dateOfBirth}
         />
        <InputField
            label="Blood Type"
            name="bloodType"
            type="bloodType"
            defaultValue={data?.bloodType}
            register={register}
            error={errors?.bloodType}
         />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-inProgress font-semibold">Gender</label>
          <select
              {...register("gender")}
              className="ring-[1.5px] ring-gray300 p-2 rounded-md text-xs w-full"
              defaultValue={data?.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {
              errors.gender?.message && (
                  <p className="text-xs text-red-400">
                      { errors.gender.message.toString() }
                  </p>
              )
          }
       </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label className="text-xs text-inProgress font-semibold flex items-center gap-2 cursor-pointer" htmlFor="image">
            <Image src="/upload.png" alt="this is a teacher image" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input id="image" type="file" {...register("image")} className="hidden" />
          {
              errors.image?.message && (
                  <p className="text-xs text-red-400">
                      { errors.image.message.toString() }
                  </p>
              )
          }
       </div>
        </div>
        <div className="flex items-center w-full justify-center gap-5">
            <button onClick={toggleModal} className="bg-white font-medium text-yellow py-1 px-3 rounded-md border-none ring-1 ring-yellow w-max">Cancel</button>
            <button className="bg-planning font-medium text-white py-1 px-3 rounded-md border-none w-max">Create</button>
        </div>
    </form>
  )
}

export default StudentForm