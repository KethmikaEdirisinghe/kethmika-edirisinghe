import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Achievements} from "@/sections/Achievements";
import {Contact} from "@/sections/Contact";
import { Navbar } from "./layout/NavBar";
import { Footer } from "./layout/Footer";


function App() {
  return (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>

     <Hero />
     <About />
     <Projects />
     <Achievements />
     <Contact />

    </main>
    <Footer/>
  </div>

  ); 
}

export default App;
