import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="grid-container">
      <header>
        <Link to="/"> React Shopping Cart</Link>
        <Link to="/admin"> Admin</Link>
      </header>
      <main></main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
