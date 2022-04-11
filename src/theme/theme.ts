const primary = 250;
const LIGHT = {
  primary : `hsl(${primary}, 69%, 61%)`,
  secondary: `hsl(${primary}, 57%, 53%)`,
  title: `hsl(${primary}, 8%, 15%)`,
  text: {
    primary: `hsl(${primary}, 8%, 45%)`,
    secondary: `hsl(${primary}, 8%, 65%)`,
  },
  background: {
    paper: `hsl(${primary}, 60%, 99%)`,
    default: `hsl(${primary}, 60%, 99%)`,
  },
  
}

const DARK = {
  primary : `hsl(${primary}, 30%, 8%)`,
  secondary: `hsl(${primary}, 57%, 53%)`,
  title: `hsl(${primary}, 8%, 95%)`,
  text: {
    primary: `hsl(${primary}, 8%, 75%)`,
    secondary: `hsl(${primary}, 8%, 65%)`,
  },
  background: {
    paper: `hsl(${primary}, 28%, 12%)`,
    default: `hsl(${primary}, 28%, 12%)`,
  },
}


const getTheme = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          ...LIGHT,
          
        }
      : {
          // palette values for dark mode
          ...DARK
        }),
  },
});

export default getTheme;