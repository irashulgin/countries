import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  margin: "0.5rem",
  width: "100%",
}));

const FlexCenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export interface Option {
  label: string;
}

interface SearchProps {
  options: string[];
  onChange: (value: string | null) => void;
}

const Search: React.FC<SearchProps> = ({ options, onChange }) => {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const onChangeValue = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue(value);
    onChange(value);
  };
  return (
    <FlexCenterBox>
      <Autocomplete
        value={value}
        onChange={onChangeValue}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="country"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <CustomTextField {...params} label="Country" />
        )}
      />
    </FlexCenterBox>
  );
};
export default Search;
