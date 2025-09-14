import "./App.css";
import PaginaIndex from "./Components/PaginaIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYouPage from "./Components/ThankYouPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaIndex />} />
          <Route path="/obrigado" element={<ThankYouPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
