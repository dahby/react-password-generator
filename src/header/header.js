import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

// const useStyles = makeStyles({
//   root: {
//     height: '10%',
//     fontSize: '30px',
//     position: 'right',
//     justifyContent: 'center',
//     alignContent: 'flex-end',
//   }
// })

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Password Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;

// .App-header {
//   background-color: #282c34;
//   min-height: 10vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }