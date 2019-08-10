import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Slider } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    color: 'green',
    maxWidth: '80%',
    margin: 'auto',
    marginTop: '30px'
  }
})

const PasswordSlider = props => {
  const classes = useStyles();
  return <Slider className={classes.root} ref={props.sliderRef} valueLabelDisplay={'auto'} onChangeCommitted={props.setPasswordLength} min={0} max={32}/>
}

export default PasswordSlider;