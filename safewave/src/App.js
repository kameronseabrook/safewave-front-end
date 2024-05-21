
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/safewavai" element={<Chat />} /> */}
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;