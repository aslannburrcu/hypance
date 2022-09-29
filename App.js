
import "./App.css";

import {BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='users' element={<Users />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
