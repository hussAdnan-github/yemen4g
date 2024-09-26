import Link from "next/link";
import Header from "../components/Header";
import Form from "../components/Form";

 
export default function page() {
  return (
    <>
               <Header/> 

    <div>
       
 
       <div className="flex justify-center items-center   h-screen bg-white">
        
         <div className="container mx-auto my-4 px-4 lg:px-20">
       
           <div className="w-full p-8 my-4 md:px-12   lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
             <div className="flex justify-center">
               <h1 className="font-bold uppercase text-3xl md:text-5xl ">تسجيل الدخول</h1>
             </div>
             <div className="flex justify-center">
              <Form/>
              
               </div>
              
            
             </div>
       
          
           </div>
           
       </div>
       
        
         
           </div>
    </>
  )
}
