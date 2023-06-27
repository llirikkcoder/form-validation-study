// import * as React from "react";
// import { TextField } from "@mui/material";

// const AbstractTextField = (props) => {
//   const {
//     required,
//     disabled,
//     ref,
//     onChange,
//     value,
//     name,
//     formState,
//     selectLabel,
//     multiline,
//     rows,
//   } = props;

//   const defaultValue = value !== undefined ? value : "";

//   return (
//     <TextField
//       disabled={disabled}
//       required={required}
//       error={!!formState.errors[name]}
//       placeholder={selectLabel}
//       label={selectLabel}
//       multiline={multiline}
//       rows={rows}
//       variant="outlined"
//       fullWidth
//       helperText={formState.errors[name] && formState.errors[name].message}
//       onChange={(e) =>
//         onChange({
//           target: {
//             name,
//             value: e.target.value,
//           },
//         })
//       }
//       value={defaultValue}
//       inputRef={ref}
//     />
//   );
// };

// export default AbstractTextField;

import React from 'react';
import { TextField } from '@mui/material';

const AbstractTextField = React.forwardRef((props, ref) => {
  const {
    required,
    disabled,
    onChange,
    value,
    name,
    formState,
    selectLabel,
    multiline,
    rows,
  } = props;

  const defaultValue = value !== undefined ? value : '';

  return (
    <TextField
      disabled={disabled}
      required={required}
      error={!!formState.errors[name]}
      placeholder={selectLabel}
      label={selectLabel}
      multiline={multiline}
      rows={rows}
      variant="outlined"
      fullWidth
      helperText={formState.errors[name] && formState.errors[name].message}
      onChange={(e) =>
        onChange({
          target: {
            name,
            value: e.target.value,
          },
        })
      }
      value={defaultValue}
      inputRef={ref}
    />
  );
});

export default AbstractTextField;

