import {
  ApartmentCard,
  ApparmentHero,
  Form,
  WhyChooseUs,
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
      <WhyChooseUs />
      <Form />
    </main>
  );
}
export default Home;