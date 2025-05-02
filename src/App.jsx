import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ padding: "20px", flexGrow: 1 }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
