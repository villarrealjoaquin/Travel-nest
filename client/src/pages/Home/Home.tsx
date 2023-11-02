import {
  ApartmentCard,
  ApparmentHero,
  Form,
  WhyChooseUs,
  ApartmentExplorer
} from ".";
import { Navbar } from "../../components";
import SliderHome from "./components/Slider/Slider";

function Home() {
  return (
    <main>
      <Navbar />
      <ApparmentHero />
      <SliderHome />
      <ApartmentCard />
      <ApartmentExplorer />
      <WhyChooseUs />
      <Form />
    </main>
  );
}
export default Home;