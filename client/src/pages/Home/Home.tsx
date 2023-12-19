import {
  ApartmentCard,
  ApparmentHero,
  Form,
  WhyChooseUs,
  ApartmentExplorer
} from ".";
import { useTokenRefresh } from "../../Hooks/useTokenRefresh";
import { Footer, Navbar } from "../../components";
import SliderHome from "./components/Slider/Slider";

function Home() {
  useTokenRefresh();
  return (
    <main>
      <Navbar />
      <ApparmentHero />
      <SliderHome />
      <ApartmentCard />
      <ApartmentExplorer />
      <WhyChooseUs />
      <Form />
      <Footer />
    </main>
  );
}
export default Home;