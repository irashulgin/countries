import { ICountry } from "../types/Country";

export const fetchAllCountries = async (): Promise<ICountry[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  return await response.json();
};
