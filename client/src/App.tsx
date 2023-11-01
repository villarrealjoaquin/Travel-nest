import { Footer } from "./components";
import { Home, Apartments } from "./pages";
import { Route, Routes } from "react-router-dom";
import './i18n';

function App() {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
