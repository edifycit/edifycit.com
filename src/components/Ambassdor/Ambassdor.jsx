"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
const Apply = () => {
  const [showpass, setShowpass] = useState(true);
  const [type, setType] = useState(true);
  const toogle = () => {
    setShowpass(!showpass);
    setType(!type);
  };
  const [input, setInput] = useState({
  
      fullName: "",
      username:"",
      passwrod: "",
      email: "",
      phone: "",
      address: "",
      refrance: "",
      promoCode:"",
      photo: "",
      status:"",
  });
  const inputhandler = (e) =>{
const {name,value}= e.target
setInput({...input,[name]:value})
  }

  const submitHandler =  async(e) =>{
try {
  e.preventDefault()
  const res = await axios.post("/api/ambassadors", input)
  console.log(res)
} catch (error) {
  console.log(error)
}
  }
  return (
    <>
     
      <Image
        width={700}
        height={700}
        className="absolute left-[12%] -bottom-10 invert w-[10vw] -z-10 animate-spin-slow opacity-25"
        src="/images/triangle.png"
        alt=""
      />
      <Image
        width={700}
        height={700}
        className="absolute left-[14%] -bottom-10 invert w-[10vw] -z-10 animate-bounce opacity-30"
        src="/images/triangle.png"
        alt=""
      />

      <form onSubmit={submitHandler} className="w-full bg-[rgba(38,38,38,0.5)] p-4 rounded-md shadow-lg relative">
        {/* Personal */}
        <Image
          width={700}
          height={700}
          className="absolute top-0 right-[8%] w-[25vw] animate-spin-slow invert -z-20 opacity-10"
          src="/images/doddel.png"
          alt=""
        />
        <fieldset className="mb-4">
          <legend className="w-full px-4 py-4 bg-[#00000090] text-xl  text-gray-400 border border-gray-600 font-medium rounded-md outline-none group">
            Personal
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-2">
            <div className="relative">
              <input
                className="bg-transparent shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                type="text"
                placeholder="Full Name"
                name="fullName"
                onChange={inputhandler}
              />
              <i className="bx bxs-user absolute bottom-2 right-2"></i>
            </div>

            <div className="relative">
              <input
                className="bg-transparent shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                type="email"
                placeholder="Email"
                name="email"
                onChange={inputhandler}
              />

              <i className="bx bxs-envelope absolute bottom-2 right-2"></i>
            </div>

            <div className="relative">
              <input
                className="bg-transparent shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                type="number"
                placeholder="Contact"
                name="phone"
                onChange={inputhandler}
              />
              <i className="bx bxs-phone absolute bottom-2 right-2"></i>
            </div>

            <div className="relative">
              <input
                className="bg-transparent shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                type="address"
                placeholder="Address"
                name="address"
                onChange={inputhandler}
              />
              <i className="bx  bx-current-location absolute bottom-2 right-2"></i>
            </div>

            <div className="relative">
              <input
                className="bg-transparent shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                type="text"
                placeholder="User Name"
                name="username"
                onChange={inputhandler}
              />

              <i className="bx bxs-user-pin absolute bottom-2 right-2"></i>
            </div>

            <div className="relative">
              <input
                className="bg-transparent  shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                placeholder="Enter Password"
                type={`${type ? "text" : "password"}`}
                name="passwrod"
                onChange={inputhandler}
              />

              <i
                onClick={toogle}
                className={`${
                  showpass
                    ? "bx bxs-show absolute bottom-[15px] right-[10px] z-40 cursor-pointer "
                    : "bx bxs-hide absolute bottom-[15px] right-[10px] z-40"
                }`}
              ></i>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl  p-2">
            <label className="px-2 text-gray-400">Gender :</label>
            <div className="flex gap-4">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="1"
                  value="Male"
                  className="peer hidden"
                  onChange={inputhandler}
                />
                <label
                  htmlFor="1"
                  className="block cursor-pointer border-b  select-none px-2 py-1 text-center peer-checked:bg-[#4190c1] peer-checked:font-bold peer-checked:text-white"
                >
                  Male
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="2"
                  value="Female"
                  className="peer hidden"
                  onChange={inputhandler}
                />
                <label
                  htmlFor="2"
                  className="block cursor-pointer select-none border-b px-2 py-1 text-center peer-checked:bg-[#d96f81b4] peer-checked:font-bold peer-checked:text-white"
                >
                  Female
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="3"
                  value="Others"
                  className="peer hidden"
                  onChange={inputhandler}
                />
                <label
                  htmlFor="3"
                  className="block cursor-pointer select-none border-b px-2 py-1 text-center peer-checked:bg-gray-500 peer-checked:font-bold peer-checked:text-white"
                >
                  Other
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {/* Qualification */}
        <fieldset className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-2">
            <div className="relative">
              <input
                className="bg-transparent shadow-2xl px-2 py-2 outline-none w-full border-b focus:border-blue-400 duration-75 "
                type="text"
                name="refrance"
                placeholder="Refrance"
                onChange={inputhandler}

              />
              <i className="bx bxs-group absolute bottom-2 right-2"></i>
            </div>
          </div>
        </fieldset>

        <div className="flex justify-end gap-6">
          <button className="bg-gray-950 text-gray-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group whitespace-nowrap">
            <input type="submit" />
            <span className="bg-blue-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          </button>
          <input
            className="border px-4  rounded-md border-gray-600"
            type="reset"
            name=""
            id=""
          />
        </div>
      </form>
    </>
  );
};

export default Apply;
