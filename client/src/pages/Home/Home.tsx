import {
  ApartmentCard,
  ApartmentExplorer,
  ApartmentSearch,
  ApparmentHero,
  Form,
  WhyChooseUs,
} from ".";
import SliderHome from "./components/Slider/Slider";

function Home() {
  return (
    <main>
      <ApartmentSearch />
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