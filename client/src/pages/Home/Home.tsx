import {
  ApartmentCard,
  ApparmentHero,
  Form,
  WhyChooseUs,
} from ".";
import SliderHome from "./components/Slider/Slider";

function Home() {
  return (
    <main>
      <ApparmentHero />
      <SliderHome />
      <ApartmentCard />
      <WhyChooseUs />
      <Form />
    </main>
  );
}
export default Home;