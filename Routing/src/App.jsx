import { Routes,Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Todo from "./pages/Todo";


function App(){
  const name = "sindhu"
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home name={name} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
        </BrowserRouter>
        

  )
}


export default App
