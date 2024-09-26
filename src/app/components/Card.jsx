import Image from 'next/image'
 
import card1 from "../../../public/image/card1.jpeg";
import card2 from "../../../public/image/card2.jpeg";

export default function Card() {
  return (
    <div>
      <div className='flex justify-evenly'>
      <div className='card'>
        <Image style={{borderRadius: "20px 8px 20px 8px "}}
                className="w-80 border-[#0474c1] border-2"
                src={card1}
            
                alt=""
              />
        
        </div>
      <div className='card'>
        <Image style={{borderRadius: "20px 8px 20px 8px "}}
                className="w-80 border-[#0474c1] border-2"
                src={card1}
            
                alt=""
              />
        
        </div>
      <div className='card'>
        <Image style={{borderRadius: "20px 8px 20px 8px "}}
                className="w-80 border-[#0474c1] border-2"
                src={card2}
            
                alt=""
              />
        
        </div>
      </div>
    </div>
  )
}
