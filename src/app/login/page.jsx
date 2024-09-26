import Link from "next/link";
import Header from "../components/Header";


export default function page() {
  return (
    <>
               <Header/> 

    <div>
       
 
       <div className="flex justify-center items-center   h-screen bg-white">
        
         <div className="container mx-auto my-4 px-4 lg:px-20">
       
           <div className="w-full p-8 my-4 md:px-12   lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
             <div className="flex justify-center">
               <h1 className="font-bold uppercase text-5xl ">تسجيل الدخول</h1>
             </div>
             <div className="flex justify-center">
               <form action="" className="w-[300px] mt-12">
               <input className="w-full bg-gray-100 text-gray-900 text-end mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                   type="text" placeholder="أســـم المستخدم*" />
               <input className="w-full bg-gray-100 text-gray-900 text-end mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                   type="text" placeholder="كلمة المرور*" />
                     <div class="my-2 mt-8    ">
                 <Link href={'/customer'}>
                 <button class="uppercase text-sm font-bold tracking-wide bg-[#0474c1] text-gray-100 p-3 rounded-lg w-full 
                             focus:outline-none focus:shadow-outline">
                   تسجيل
                 </button>
                 </Link>
               </div>
               </form>
              
               </div>
              
            
             </div>
       
          
           </div>
           
       </div>
       
        
         
           </div>
    </>
  )
}
