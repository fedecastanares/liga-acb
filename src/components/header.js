import React from "react"
import Logo from './logo'
import { Link } from "gatsby"

// App Bar
import { makeStyles } from '@material-ui/core/styles';
import {Menu, Brightness5, Brightness3} from '@material-ui/icons';
import {AppBar, Toolbar, Typography, IconButton, Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background,
    color: theme.palette.backgroundContrast,
    position: 'fixed'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  title: {
    flexGrow: 1,
  },
  divisional : {
    paddingRight: '3vh',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Header = ({darkMode, setdarkMode}) => {
  const classes = useStyles();


  return (
      <AppBar className={classes.root} color='default' >
        <Toolbar>
          <Grid container alignContent='center' alignItems='center' justify='space-between'>
            <Grid item>
              <Link to='/' style={{textDecoration: 'none',color: 'inherit'}}>
                <Grid container alignContent='center' alignItems='center' justify='space-around' spacing={3}>
                  <Grid item>
                    <Logo
                    height="48px"
                    width="48px"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                    Liga ACB Montevideo
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
            <Grid item>
              <Grid container alignContent='center' alignItems='center' justify='space-around' spacing={3}>
                <Link to='/divisional' style={{textDecoration: 'none',color: 'inherit'}}>
                  <Typography variant="body1" className={classes.divisional}>
                    Divisional A
                  </Typography>
                </Link>
                <Typography variant="body1" className={classes.divisional}>
                  Divisional B
                </Typography>
                <Typography variant="body1" className={classes.divisional}>
                  Divisional +35
                </Typography>
                {darkMode ? 
                <IconButton color="inherit" aria-label="menu" style={{color: '#DD4B04'}} onClick={() => setdarkMode(false)}>
                  <Brightness5 /> 
                </IconButton> : 
                <IconButton color="inherit" aria-label="menu" style={{color: '#DD4B04'}} onClick={() => setdarkMode(true)}>
                  <Brightness3 />
                </IconButton> }
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu" style={{color: '#DD4B04'}}>
                  <Menu />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  )}


export default Header
