import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid-container">
      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
