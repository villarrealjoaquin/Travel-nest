import { createContext, useContext } from "react";
import { Apartment } from "../../../models";

interface ApartmentContextProps {
  apartmentData: Apartment;
  setApartmentData: React.Dispatch<React.SetStateAction<Apartment>>;
  handleSelectChange: (value: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApartmentContext = createContext<ApartmentContextProps | undefined>(undefined);

export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);

  if (!context) {
    throw new Error(
      'PublishApartment component must be rendered as child of PublishApartment component'
    );
  }

  return context;
}

export default ApartmentContext;