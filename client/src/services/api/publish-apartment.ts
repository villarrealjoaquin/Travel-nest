import instance from "./axios.config";

export const publishApartmentRequest = (apartmentData: FormData) => instance.post('/publishApartment/upload', apartmentData);