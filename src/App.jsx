import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import Transportation from "./pages/Transportation";
import Relocations from "./pages/Relocations";
import Garbage from "./pages/Garbage";
import Intercity from "./pages/Intercity";
import Loaders from "./pages/Loaders";
// import Notfound from "./pages/Notfound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/relocations" element={<Relocations />} />
          <Route path="/garbage" element={<Garbage />} />
          <Route path="/intercity" element={<Intercity />} />
          <Route path="/loaders" element={<Loaders />} />
          {/* <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
