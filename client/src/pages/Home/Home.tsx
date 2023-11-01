import {
  ApartmentCard,
  ApparmentHero,
  Form,
  WhyChooseUs,
  ApartmentExplorer
} from ".";
import SliderHome from "./components/Slider/Slider";

function Home() {
  return (
    <main>
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