import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, fieldName, theme) {
  return {
    fontWeight:
      fieldName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder({
  fields = [],
  placeholder,
}) {
  const theme = useTheme();
  const [fieldName, setFieldName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFieldName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{width: 300}}>
        <Select
          multiple
          displayEmpty
          value={fieldName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return placeholder;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="" style={{ color: "white" }}>
            {placeholder}
          </MenuItem>
          {fields.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, fieldName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
