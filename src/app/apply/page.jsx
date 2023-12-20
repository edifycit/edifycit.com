"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Apply = () => {

  const [courseName, setCourseName] = useState([]);
  const [loading,setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    city: "",
    gender: "",
    qualification: "",
    completionYear: "",
    institution: "",
    source: "",
    course: "",
    promoCode: "",
  });

  

  const fetchcourses = async () => {
    try {
      const { data } = await axios.get(
        "https://admin.edifycit.com/api/courses?titlesOnly=true"
      );
      setCourseName(data.message.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourses();
  }, []);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    var id
    try {
      e.preventDefault();
      setLoading(true)
      id = toast.loading("Please wait...")
      const res = await axios.post("/api/enquiries", formData);

      if(res.data.success){
        toast.update(id, { render: "Form Submitted Successfully!", type: "success", isLoading: false } );
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          dob: "",
          city: "",
          gender: "",
          qualification: "",
          completionYear: "",
          institution: "",
          source: "",
          course: "",
          promoCode: "",
        })
      }

    } catch (error) {
      toast.update(id, { render: error.response?.data?.message , type:"error", isLoading: false });
    }finally{
      setLoading(false)
      setTimeout(() => {
        toast.dismiss(id)
      }, 3000);
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-gray-200">
          Apply Online
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
        </div>
      </div>
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

      <form
        className="w-full bg-[rgba(38,38,38,0.9)] border overflow-hidden border-white/10 shadow-black rounded-md shadow-lg relative"
        onSubmit={submitHandler}
      >
        {/* Personal */}
        <Image
          width={700}
          height={700}
          className="absolute top-0 right-[8%] w-[25vw] animate-spin-slow invert -z-20 opacity-10"
          src="/images/doddel.png"
          alt=""
        />
        <fieldset className="mb-4">
          <legend className="w-full p-4 bg-black  text-white border-gray-600 font-medium outline-none group">
            Personal Information
          </legend>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="fullName"
                value={formData.fullName}
                name="fullName"
                placeholder=""
                type="fullName"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <i className="bx bx-user absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="email"
                value={formData.email}
                name="email"
                placeholder=""
                type="email"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="email"
              >
                Email
              </label>
              <i className="bx bx-envelope absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="phone"
                value={formData.phone}
                name="phone"
                placeholder=""
                type="tel"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="phone"
              >
                Phone
              </label>
              <i className="bx bx-phone absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="address"
                value={formData.address}
                name="address"
                placeholder=""
                type="text"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="address"
              >
                Address
              </label>
              <i className="bx bx-current-location absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="city"
                value={formData.city}
                name="city"
                placeholder=""
                type="tel"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="city"
              >
                City
              </label>
              <i className="bx bxs-city absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="dob"
                value={formData.dob}
                name="dob"
                placeholder=""
                type="date"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              {/* <i className="bx bx-calendar absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i> */}
            </div>

            <div
              className={`relative col-span-1`}
            >
              <select
                required
                style={{borderRadius:"5px !important"}}
                id="course"
                name="course"
                placeholder=""
                value={formData.course}
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border-white/10 text-lg px-3 pb-3.5 pt-5 w-full border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option className="text-black" value="">
                  Select Course
                </option>
                {courseName.map((v, i) => {
                  return (
                    <option className="text-black" key={i} value={v._id}>
                      {v.title}
                    </option>
                  );
                })}
              </select>
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="dob"
              >
                Course
              </label>
              <i className="bx bxs-chevron-down absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <select
                required
                value={formData.gender}
                style={{borderRadius:"5px !important"}}
                id="gender"
                name="gender"
                placeholder=""
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option className="text-black" value="">
                  Select Gender
                </option>
                <option className="text-black" value="Male">
                  Male
                </option>
                <option className="text-black" value="Female">
                  Female
                </option>
                <option className="text-black" value="Other">
                  Other
                </option>
              </select>
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="gender"
              >
                Gender
              </label>
              <i className="bx bxs-chevron-down absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>
          </div>
        </fieldset>
        {/* Qualification */}
        <fieldset className="mb-4">
          <legend className="w-full p-4 bg-black  text-white border-gray-600 font-medium outline-none group">
            Qualification
          </legend>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            <div
              className={`relative col-span-1`}
            >
              <select
                required
                value={formData.qualification}
                style={{borderRadius:"5px !important"}}
                id="qualification"
                name="qualification"
                placeholder=""
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option value="" disabled>
                  Select Qulification
                </option>
                <option className="text-black" value="Matric">
                  Matric
                </option>
                <option className="text-black" value="oLevels">
                  O-Levels / IGCSE
                </option>
                <option className="text-black" value="Inter">
                  {" "}
                  Intermediate
                </option>
                <option className="text-black" value="A-Levels">
                  {" "}
                  A-Levels
                </option>
                <option className="text-black" value="AS-Levels">
                  {" "}
                  AS-Levels
                </option>
                <option className="text-black" value="Bachelor">
                  Bcom / BA / BSc
                </option>
                <option className="text-black" value="Bachelor-I">
                  ADP / HND
                </option>
                <option className="text-black" value="Bachelor Hons">
                  Bachelor Honors
                </option>
                <option className="text-black" value="Master">
                  Master
                </option>
              </select>
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="qualification"
              >
                Qualification
              </label>
              <i className="bx bxs-chevron-down absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="completionYear"
                value={formData.completionYear}
                name="completionYear"
                placeholder=""
                type="text"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="completionYear"
              >
                Completion Year
              </label>
              <i className="bx bx-hourglass absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            <div
              className={`relative col-span-1`}
            >
              <input
                required
                id="institution"
                value={formData.institution}
                name="institution"
                placeholder=""
                type="tel"
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="institution"
              >
                Institute
              </label>
              <i className="bx bxs-city absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>
          </div>
        </fieldset>
        {/* More info */}
        <fieldset className="">
          <legend className="w-full p-4 bg-black  text-white border-gray-600 font-medium outline-none group">
            More Info
          </legend>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            <div
              className={`relative col-span-1`}
            >
              <select
                required
                value={formData.source}
                style={{borderRadius:"5px !important"}}
                id="source"
                name="source"
                placeholder=""
                onChange={inputChangeHandler}
                className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option className="text-black" value="" disabled>
                  Where did you here about us ?
                </option>
                <option className="text-black" value="Banner">
                  Banner
                </option>
                <option className="text-black" value="YouTube">
                  YouTube
                </option>
                <option className="text-black" value="Social Media">
                  Social Media
                </option>
                <option className="text-black" value="Friend">
                  Through a Friend
                </option>
                <option className="text-black" value="Ambassador">
                  Through an Ambassador
                </option>
              </select>
              <label
                className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="source"
              >
                Source
              </label>
              <i className="bx bxs-chevron-down absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
            </div>

            {formData.source == "Ambassador" ? (
              <div
                className={`relative col-span-1`}
              >
                <input
                  required
                  value={formData.promoCode}
                  id="promoCode"
                  name="promoCode"
                  placeholder=""
                  type="text"
                  onChange={inputChangeHandler}
                  className={`block bg-transparent text-white border border-white/10 rounded-md text-lg px-3 pb-3.5 pt-5 w-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                />
                <label
                  className="absolute rounded-sm bg-[rgba(38,38,38,0.9)] text-sm text-white  duration-300 transform -translate-y-5 scale-[0.90] top-2 z-10 origin-[0]  px-1 ml-1 peer-focus:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.90] peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  htmlFor="promoCode"
                >
                 Ambassador Promo Code
                </label>
                <i className="bx bx-group absolute bottom-2 right-3 text-lg text-white/50 top-1/2 -translate-y-1/2"></i>
              </div>
            ) : null}
          </div>
          <div className="p-4 pt-0">
          <div className="flex justify-end gap-6">


          <button disabled={loading} className="bg-gray-950 disabled:opacity-60 disabled:cursor-not-allowed text-gray-400 cursor-pointer border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group whitespace-nowrap">
             Submit
            <span className="bg-blue-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          </button>


          <input
            className="border px-4  disabled:opacity-60 disabled:cursor-not-allowed rounded-md border-gray-600"
            disabled={loading}
            type="reset"
            name=""
            id=""
          />
        </div>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Apply;
