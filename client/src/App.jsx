import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Jumbo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
