 
import Image from "next/image";
import logo from "../../../public/image/logo.jpeg";
import Link from "next/link";
export default function Header() {
  return (
    <div className="navbar ps-12 pe-12 py-2  bg-[#0474c1]">
        <div className="flex justify-between items-center">
            <div className="logo">
            <Image src={logo} alt="" className="rounded-2xl" width={80}  />
            </div>
          <div className="flex gap-10">
        
            <div>
               <Link href={"/login"}  className="text-2xl hover:text-[#0474c1] text-white">
               تسجيل الدخول
               </Link>
            </div>
            <div >
             <Link href={'/'} className="text-2xl text-white hover:text-[#0474c1]">
             الصفحة الرئسية
             </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
