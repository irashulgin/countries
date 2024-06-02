import { FC, useEffect, useState } from "react";
import MapWithCountries from "../components/MapWithCountries";
import { ICountry } from "../types/Country";
import { fetchAllCountries } from "../api";

const Countries: FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const fetchedCountries: ICountry[] = await fetchAllCountries();
        setCountries(fetchedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading countries...</p>
      ) : (
        <>
          <MapWithCountries countries={countries} />
        </>
      )}
    </>
  );
};
export default Countries;
