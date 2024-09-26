import Image from "next/image";
import logo from "../../../public/image/logo.jpeg";
 

export default function SideBar() {
  return (
    <div className="sidebar">
 
    <div
      className="sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
  
      
       <div className="flex justify-center mb-6">
       <Image
                className="   rounded-2xl"
                src={logo}
                width={200}
                height={200}
                alt=""
              />
       </div>
      <div
        className="p-2.5 mt-3 flex justify-center items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#0474c1] text-white"
      >
      
        <span className="text-[15px] ml-4 text-gray-200 font-bold">أســــم المـــحل</span>
      </div>
      <div className="mb-4 mt-2 bg-gray-600 h-[1px]"></div>
      <div
        className="p-2.5 mt-3 flex justify-center items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#0474c1] text-white"
      >
       
        <span className="text-[15px] ml-4 text-gray-200 font-bold">تسجيل الخروج</span>
      </div>
    </div>
    </div>
  )
}
