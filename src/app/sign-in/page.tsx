"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

const schema = z.object({
  username: z.string().min(1, { message: 'Username must be atleast 3 characters long!' })
  .max(20, { message: 'Username must be at most 20 characters long!' }),
  password: z.string().min(6, { message: "Password must be atleast 6 characters long!"})
});

type Inputs = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
});

  const onSubmit = handleSubmit((data) => {
  console.log(data)
  })
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-skyLight">
      <article className="bg-white rounded-md shadow-md p-4 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%]">
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-lg font-semibold text-center">School Management System Login</h1>
        <div className="w-full">
          <input
              type="text"
              placeholder="Please enter username"
              {...register("username")}
              className="ring-[1.5px] ring-gray300 px-2 py-3 text-xs w-full outline-none"
          />
          {
              errors.username?.message && (
                  <p className="text-xs text-red-400">
                      { errors.username.message.toString() }
                  </p>
              )
          }
       </div>
        <div className="w-full">
          <input
              type="password"
              placeholder="Please enter password"
              {...register("password")}
              className="ring-[1.5px] ring-gray300 px-2 py-3  text-xs w-full outline-none"
          />
          {
              errors.password?.message && (
                  <p className="text-xs text-red-400">
                      { errors.password.message.toString() }
                  </p>
              )
          }
       </div>
          <button className="bg-blue-400 font-medium text-white py-1 px-3 border-none">SIGN IN</button>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray500">Create an account? <Link className="text-inProgress underline" href={"/"}>Sign Up</Link></p>
            <p className="text-sm text-gray500">Sign in as a demo user? <Link className="text-inProgress underline" href={"/"}>Demo User</Link></p>
          </div>
        </form>
      </article>
    </main>
  )
}

export default LoginPage