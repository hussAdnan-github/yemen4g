import Image from 'next/image'
 
import logo from "../../../public/image/logo.jpeg";

export default function Document() {
  return (
    <div className='mt-24'>
        <div className='w-[1050px] flex justify-center'>
            <div className='bg-[#0474c1] w-[1000px] flex justify-between items-center px-4 py-2 rounded-xl'>
      
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>صورة الاستمارة </h1>
            <h1 className='text-white text-lg'>sdakjd</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>رقم الهاتف للعميل</h1>
            <h1 className='text-white text-lg'>sdakjd</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>رقم البطاقة</h1>
         <h1 className='text-white text-lg'>sdakjd</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>رقم العميل</h1>
         <h1 className='text-white text-lg'>sdakjd</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>أسم العميل</h1>
            <h1 className='text-white text-lg'>sdakjd</h1>
         </div>
         <div className='img-customer'>
         
         
         <Image src={logo} alt="" className="rounded-full" width={60}  />
         </div>
            </div>
        </div>
    </div>
  )
}
