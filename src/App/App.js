import React from 'react';
import './App.css';
import RegisterForm from "../Pages/RegisterForm";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider, Paper, AppBar, Typography  } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '150px',
    width: '80%'
  },
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      
      <div className={classes.appMain}>
        <Paper className={classes.pageContent}>
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            User Registration
          </Typography>
        </AppBar>
        <RegisterForm />
        </Paper>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
