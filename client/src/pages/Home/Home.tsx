import { ApartmentCard, ApartmentSearch, ApparmentHero } from ".";
import Form from './components/FormDiscounts/Form';
import SliderHome from "./components/Slider/Slider";
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';

function Home() {
  return (
    <main>
      <ApartmentSearch />
      <ApparmentHero />
      <SliderHome />
      <ApartmentCard />
      <WhyChooseUs />
      <Form />
    </main>
  );
}
export default Home;