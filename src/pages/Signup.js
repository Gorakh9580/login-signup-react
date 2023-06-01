import React, { useState } from "react";

const Signup = () => {
  const [firstName,setFirstname] = useState("")
  const [lastName,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] =useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName,lastName,email,password,confirmPassword)
  }
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div
        className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90"
      >
        <form onSubmit={handleSubmit}>
      <h2 className="text-center font-bold text-3xl">Welcome <span className=' text-[#00FF00]'>Back</span></h2>
      <p className="text-xs text-center mt-4 text-[#002D74]">Gold to see you again</p>
          <h2 className="text-center text-blue-700 text-3xl font-semibold my-4">Signup With me</h2>

          <div id="fullName" className="flex flex-row">
            <div id="firstName" className="w-1/2 mr-1">
              <label htmlFor="fname" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                onChange={e=>setFirstname(e.target.value)}
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
            </div>

            <div id="lastName" className="w-1/2 mr-1">
              <label htmlFor="lname" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                onChange={e=>setLastname(e.target.value)}
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
            </div>
          </div>

          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name=""
            onChange={e=>setEmail(e.target.value)}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />

          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name=""
            onChange={e=>setPassword(e.target.value)}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />

          <label htmlFor="confirmPassword" className="text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            name=""
            onChange={e=>setConfirmPassword(e.target.value)}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />

          <input
            type="submit"
            name=""
            id="signUp"
            className="mt-3 bg-[#000000] shadow w-full h-10 cursor-pointer text-white rounded-md hover:bg-[#000000]-600 hover:outline outline-2 outline-red-600 outline-offset-2 text-sm"
          />
          <p className="text-xs my-2 ">
            Already have a account?{" "}
            <a href="/" className="text-blue-600">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
