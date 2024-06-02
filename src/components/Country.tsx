import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICountry } from "../types/Country";
import styled from "@emotion/styled";

interface CountryProps {
  country: ICountry;
}

const CustomCard = styled(Card)`
  width: 15rem;
  cursor: pointer;
`;

const Country: FC<CountryProps> = ({ country }) => {
  const { name, capital, flags, languages, population } = country;
  const commonName = name.common;
  const officialName = name.official;
  return (
    <CustomCard>
      <CardMedia
        component="img"
        height="140"
        image={flags.svg}
        alt={`Flag of ${commonName}`}
      />
      <CardHeader title={commonName} subheader={officialName} />
      <CardContent>
        {capital && (
          <Typography variant="body2" color="text.secondary">
            Capital: {capital[0]}
          </Typography>
        )}
        {!!languages && (
          <Typography variant="body2" color="text.secondary">
            Languages: {Object.values(languages).join(", ")}
          </Typography>
        )}
        {!!population && (
          <Typography variant="body2" color="text.secondary">
            Population: {population.toLocaleString()}
          </Typography>
        )}
      </CardContent>
    </CustomCard>
  );
};

export default Country;
