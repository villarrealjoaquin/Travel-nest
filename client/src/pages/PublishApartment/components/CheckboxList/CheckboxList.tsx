import { Checkbox } from "../../../../components";
import { Apartment } from "../../../../models";
import { useApartmentContext } from "../../context/PublishApartment.context";

function CheckboxList() {
  const { apartmentData, setApartmentData } = useApartmentContext();

  const handleCheckboxChange = (propertyName: keyof Apartment) => {
    setApartmentData((prevData) => ({
      ...prevData,
      [propertyName]: !prevData[propertyName],
    }));
  };

  return (
    <section className="flex gap-3 justify-between items-center">
      <div className="flex flex-col gap-3 mt-2">
        <label className="font-bold">Se permiten animales?</label>
        <div className="items-top flex items-center space-x-2">
          <Checkbox
            id="terms1"
            checked={apartmentData.animals}
            onChange={() => handleCheckboxChange('animals')}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Si
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <label className="font-bold">La propiedad posee camaras de vigilancia?</label>
        <div className="items-top flex items-center space-x-2">
          <Checkbox
            id="terms1"
            checked={apartmentData.segurity}
            onChange={() => handleCheckboxChange('segurity')}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Si
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <label className="font-bold">Se permiten animales?</label>
        <div className="items-top flex items-center space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Si
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CheckboxList