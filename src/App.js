import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonGroup, IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF7E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createTheme({ 
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox 
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />   
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <div className="App">
          <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant ="h6">
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant='h2' component='div'>
            Welcome to MUI
          </Typography>
          <Typography variant='subtitle1'>
            Learn how to use Material UI
          </Typography>
          <ButtonStyled />
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
          </Grid>
          <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button 
                startIcon={<SaveIcon />}
                >
                Save
              </Button>
              <Button 
                startIcon={<DeleteIcon />}
              >Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
