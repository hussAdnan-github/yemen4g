 
import axios from 'axios';
 
import Document from '../components/Document'
import SideBar from '../components/SideBar'
async function getData() {
  const config = {
    // headers: {
    //   // 'Content-Type': 'application/json',
    //   // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      

    // }
  };
  const response = await axios.get(
    "https://yemang4.pythonanywhere.com/categories/" 
  );
  const section = await response.data;
 
  return section['data']['result'];
}
export default async function page() {
  const data = await getData();
  console.log(data)
  return (
    <div>
        <SideBar/>
        {data.map((data)=>(
         <Document key={data.id} data={data}/>
        ))}
    </div>
  )
}
