
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Tours from "./components/tours/Tours";

const data = require("./data/db.json");

export default function App() {
  return (
     <>
     <Header/>
     <Footer/>
     
     <Tours info={data}/>
     </>
 
  )
}
