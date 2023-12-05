import { Footer } from "./components";
import { Home, Login, Register, ApartmentsDirectory, PublishApartment, ApartmentDetailView } from "./pages";
import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./models/routes";
import './i18n';

function App() {
  return (
    <>
      <Routes>
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.APARTMENTS} element={<ApartmentsDirectory />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={`${PUBLIC_ROUTES.APARTMENTS}/:id`} element={<ApartmentDetailView />} />
        <Route path={PRIVATE_ROUTES.PUBLISH} element={<PublishApartment />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}
export default App

