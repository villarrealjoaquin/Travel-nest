import { Footer } from "./components";
import { Home, Login, Register, ApartmentsDirectory } from "./pages";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./models/routes";
import ApartmentDetail from "./pages/Apartments/Apartments";
import './i18n';

function App() {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PUBLIC_ROUTES.APARTMENTS} element={<ApartmentsDirectory />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={`${PUBLIC_ROUTES.APARTMENTS}/:id`} element={<ApartmentDetail />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
