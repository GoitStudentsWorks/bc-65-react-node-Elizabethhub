// import * as React from 'react';
// import Radio from '@mui/material/Radio';

// export default function RadioButtons() {
//   const [selectedValue, setSelectedValue] = React.useState('a');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <Radio
//         checked={selectedValue === 'a'}
//         onChange={handleChange}
//         value="a"
//         name="radio-buttons"
//         inputProps={{ 'aria-label': 'A' }}
//       />
//       <Radio
//         checked={selectedValue === 'b'}
//         onChange={handleChange}
//         value="b"
//         name="radio-buttons"
//         inputProps={{ 'aria-label': 'B' }}
//       />
//     </div>
//   );
// }
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtons() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
