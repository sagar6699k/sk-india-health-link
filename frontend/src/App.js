import './App.css';
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import About from "./pages/about/About.jsx";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
