'use client'
import Image from 'next/image'
import { FaEdit } from "react-icons/fa";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
 } from "@/components/ui/dialog"
import logo from "../../../public/image/logo.jpeg";
import Link from 'next/link';
import { Edit } from 'lucide-react';

export default function Document({data}) {
   const customer = data;
   console.log(customer)
  return (
    <div className='mt-24'>
        <div className='w-[1050px] flex justify-center'>
            <div className='bg-[#0474c1] w-[1000px] flex justify-between items-center px-4 py-2 rounded-xl'>
      
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-2xl'>
        <Edit/>
         </h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>صورة الاستمارة </h1>
          <Link href={customer.file_ind} className='underline font-bold text-white text-sm' >اضغظ هنا</Link>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>رقم المودم</h1>
            <h1 className='text-white text-lg'>{customer.number_imei}</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>رقم البطاقة</h1>
         <h1 className='text-white text-lg'>{customer.number_ind}</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>رقم العميل</h1>
         <h1 className='text-white text-lg'>{customer.phone}</h1>
         </div>
         <div className='name-customer flex flex-col items-end'>
         <h1 className='text-white text-lg'>أسم العميل</h1>
            <h1 className='text-white text-lg'>{customer.name}</h1>
         </div>
         <div className='img-customer'>
         
         
         <Image src={logo} alt="" className="rounded-full" width={60}  />
         </div>
            </div>
        </div>
    </div>
  )
}
