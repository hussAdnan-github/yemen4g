 
import Hero from "./components/Hero";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="home">
           <Header/> 
 
    <Hero/>
<div className="mt-40 mb-40">
<Card/>

</div>
<Footer/>
   </div>
  );
}
