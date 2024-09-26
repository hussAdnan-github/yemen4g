import Image from 'next/image'
 
import card1 from "../../../public/image/card1.jpeg";
import card2 from "../../../public/image/card2.jpeg";

export default function Card() {
  return (
    <div>
      <div className='flex items-center md:justify-evenly flex-col md:flex-row '>
      <div className='card'>
        <Image  style={{borderRadius: "20px 8px 20px 8px "}}
                className="w-80 border-[#0474c1] border-2 hover:scale-110 object-contain hover:rotate-12 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300"
                src={card1}
            
                alt=""
              />
        
        </div>
      <div className='card'>
        <Image style={{borderRadius: "20px 8px 20px 8px "}}
                className="w-80 border-[#0474c1] border-2 hover:scale-110 object-contain hover:rotate-12 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300"
                src={card1}
            
                alt=""
              />
        
        </div>
      <div className='card'>
        <Image style={{borderRadius: "20px 8px 20px 8px "}}
                className="w-80 border-[#0474c1] border-2 hover:scale-110 object-contain hover:rotate-12 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300"
                src={card2}
            
                alt=""
              />
        
        </div>
      </div>
    </div>
  )
}
