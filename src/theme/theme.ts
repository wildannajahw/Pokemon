import { amber, deepOrange, grey } from "@mui/material/colors";

// const primary = 250;
// const LIGHT = {
//   primary : `hsl(${primary}, 69%, 61%)`,
//   secondary: `hsl(${primary}, 57%, 53%)`,
//   title: `hsl(${primary}, 8%, 15%)`,
//   text: {
//     primary: `hsl(${primary}, 8%, 45%)`,
//     secondary: `hsl(${primary}, 8%, 65%)`,
//   },
//   background: {
//     paper: `hsl(${primary}, 60%, 99%)`,
//     default: `hsl(${primary}, 60%, 99%)`,
//   },
  
// }

// const DARK = {
//   primary : `hsl(${primary}, 30%, 8%)`,
//   secondary: `hsl(${primary}, 57%, 53%)`,
//   title: `hsl(${primary}, 8%, 95%)`,
//   text: {
//     primary: `hsl(${primary}, 8%, 75%)`,
//     secondary: `hsl(${primary}, 8%, 65%)`,
//   },
//   background: {
//     paper: `hsl(${primary}, 28%, 12%)`,
//     default: `hsl(${primary}, 28%, 12%)`,
//   },
// }


const getTheme = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export default getTheme;