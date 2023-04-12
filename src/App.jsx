import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Footer from "./Components/Footer";
import GitHub from "./Components/GitHub";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />

      <About />

      <Skills />

      <Projects />
      
      <GitHub/>

      <Footer />
    </div>
  );
}

export default App;