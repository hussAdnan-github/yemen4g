'use client'
import axios from "axios";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
      } = useForm({
        defaultValues: {
           
        },
      });
      const createPost = async (data ) => {
    
        try {
          await axios
            .post(
              "https://yemang4.pythonanywhere.com/login/",
              {'username' : "admin" , 
                'password' : 1234
              },
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
             if(response.status == 200){
              console.log(response.data)
              router.push('/customer')
             }
            });
        } catch (error) {
          console.error("Error creating post:", error);
          throw error;
        }
      };
      const onSubmit = async (data) => {
        createPost(data);
         
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[300px] mt-12">
    <input
      {...register("name", {
        required: "يجب أضافة أســـم المستخدم",
      })}
    className="w-full bg-gray-100 text-gray-900 text-end mt-2 p-3  rounded-xl focus:outline-none focus:shadow-outline"
        type="text" placeholder="أســـم المستخدم*" />
                    <p className="text-red-600 text-end mb-2">{errors.name?.message}</p>

    <input
      {...register("password", {
        required: "يجب أضافة كلمة المرور",
      })}
    className="w-full  rounded-xl bg-gray-100 text-gray-900 text-end mt-2 p-3   focus:outline-none focus:shadow-outline"
        type="password" placeholder="كلمة المرور*" />
          <div class="my-2  ">
          <p className="text-red-600 text-end">{errors.password?.message}</p>
 
      <button type="submit" class="mt-4 uppercase text-sm font-bold tracking-wide bg-[#0474c1] text-gray-100 p-3  w-full 
                  focus:outline-none focus:shadow-outline rounded-xl">
        تسجيل
      </button>
 
    </div>
    </form>
  )
}
