import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import MapSelectedCountry from "./MapSelectedCountry";
import Country from "./Country";
import Search from "./Search";
import { ICountry } from "../types/Country";
import { CustomBox, FlexBox } from "../style/StyledComponent";
import Box from "@mui/material/Box";

const MapComponent: React.FC<{ countries: ICountry[] }> = ({ countries }) => {
  const [zoom, setZoom] = useState<number>(2);
  const [filteredCountries, setFilteredCountries] =
    useState<ICountry[]>(countries);

  const [position, setPosition] = useState<[number, number]>([-1, -1]);
  const handleCountryClick = (country: ICountry) => {
    const [lat, lng] = [country.latlng[0], country.latlng[1]];
    setPosition([lat, lng]);
    setZoom(5);
  };

  const handleSearchChange = (name: string | null) => {
    if (name === null) {
      setFilteredCountries(countries);
      return;
    }
    setFilteredCountries(
      countries.filter(
        (state) => state.name.common.toLowerCase() === name.toLowerCase()
      )
    );
    const state = countries.find((state) => state.name.common === name);
    if (state) {
      handleCountryClick(state);
    }
  };

  return (
    <>
      <Search
        options={countries.map((item: ICountry) => item.name.common)}
        onChange={handleSearchChange}
      />
      <FlexBox>
        <CustomBox>
          <MapSelectedCountry zoom={zoom} position={position} />
        </CustomBox>
        <CustomBox>
          {filteredCountries.map((country) => (
            <Box
              key={country.name.common}
              onClick={() => handleCountryClick(country)}
            >
              <Country country={country} />
            </Box>
          ))}
        </CustomBox>
      </FlexBox>
    </>
  );
};

export default MapComponent;
