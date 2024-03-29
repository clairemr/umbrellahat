import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  overrides: {
   
    MuiCard: {
        root: {
          padding: '5px 5px',
          margin: '5px',
          backgroundColor: '#fff', // 5d737e
        },
      },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;