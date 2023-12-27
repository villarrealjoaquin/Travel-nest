import { useState } from "react";
import {
  ApartmentFeaturesForm,
  ApartmentImageUploader,
  DescriptionSectionApartment,
  PublishApartmentMap,
  ResidentialCategoryPicker
} from ".";
import { useTokenRefresh } from "../../Hooks";
import { ButtonUi, Navbar } from "../../components";
import { Apartment } from "../../models";
import CheckboxList from "./components/CheckboxList/CheckboxList";
import ApartmentContext from "./context/PublishApartment.context";
import { publishApartmentRequest } from "../../services/api/publish-apartment";

const initialValues = {
  type_property: "",
  ability: "",
  services: "",
  rooms: 0,
  beds: 0,
  price: 0,
  segurity: false,
  animals: false,
  description: "",
  ubication: "",
  images: [],
}

function PublishApartment() {
  const [apartmentData, setApartmentData] = useState<Apartment>(initialValues);
  useTokenRefresh();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(apartmentData).forEach(([key, value]) => {
      console.log(key, value);
  
      if (key === 'images' && Array.isArray(value)) {
        value.forEach((image, index) => {
          formData.append(`image_${index + 1}`, image); 
        });
      } else {
        formData.append(key, value);
      }
    });

    console.log(formData);
    
    try {
      const response = await publishApartmentRequest(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setApartmentData({
      ...apartmentData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSelectChange = (value: string) => {
    setApartmentData({
      ...apartmentData,
      type_property: value,
    });
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setApartmentData({
        ...apartmentData,
        images: [...apartmentData.images, ...files],
      });
    }
  };

  console.log(apartmentData);

  return (
    <>
      <Navbar />
      <ApartmentContext.Provider value={{
        apartmentData,
        setApartmentData,
        handleSelectChange,
        handleChange,
        handleFileChange,
      }}>
        <main className="flex justify-center flex-col w-[90%] m-auto h-[750px]">
          <h2 className="font-bold text-lg bg-[#FF385C] py-5 px-2 rounded-sm text-white">Publica tu Propiedad</h2>
          <form onSubmit={handleSubmit} className="flex justify-center gap-3 mt-5">
            <div className="w-1/2">
              <ResidentialCategoryPicker />
              <ApartmentFeaturesForm />
            </div>
            <div className="w-1/2">
              <CheckboxList />
              <ApartmentImageUploader />
              <PublishApartmentMap />
              <DescriptionSectionApartment />
              <ButtonUi className="bg-[#FF385C] font-bold">
                Publicar alojamiento
              </ButtonUi>
            </div>
          </form>
        </main>
      </ApartmentContext.Provider>
    </>
  )
}
export default PublishApartment;