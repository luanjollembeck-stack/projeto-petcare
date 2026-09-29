import Navbar from "./layout/Navbar/index"
import Hero from "./layout/Hero/index";
import Feature from "./layout/Feature/Index";
import Info from "./layout/Info/Index";
import Forms from "./layout/Contact/Index"
import Footer from "./layout/Footer";
import Whatsbutton from "./components/WhatsButton";

function App(){
  return(
    <>
    <Navbar />
    <Hero />
    <Feature />
    <Info />
    <Forms />
    <Footer />
    <Whatsbutton />
    </>
  );
}


export default App;