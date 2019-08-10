import React, {Component, Fragment} from 'react';
import PasswordSlider from './passwordSlider';
import Checkbox from '../checkbox/checkbox'
import './password.css';

class PasswordGenerator extends Component {
  constructor(){
    super();

    this.slider = React.createRef()

    this.state = {
      password: '',
      length: 0,
      scramble: [],
      uppers: true,
      lowers: true,
      nums: true,
      symbols: true
    }
  }

  componentDidMount() {
    this.populateScramble()
  }

  setPasswordLength = () => {
    this.setState({
      length: this.slider.current.textContent
    }, () => this.populateScramble())
  }

  toggleBoxes = (event) => {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    }, () => this.populateScramble())
  }

  populateScramble = () => {
    let scrambleArray = [];
    if (this.state.uppers) {
      scrambleArray.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (this.state.lowers) {
      scrambleArray.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (this.state.nums) {
      scrambleArray.push('0123456789');
    }
    if (this.state.symbols) {
      scrambleArray.push('!@#$%^&*');
    }
    this.setState({
      scramble: scrambleArray
    }, () => this.generateNewPassword())
  }

  furtherScramble = (arr) => {
    const ITERATIONS = 4
    for (let i = 0; i < ITERATIONS; i++) {
      const firstIndex = Math.floor(Math.random() * arr.length)
      const secondIndex = Math.floor(Math.random() * arr.length)
      if (firstIndex !== secondIndex) {
        const temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp
      }
    }
    return arr;
  }

  generateNewPassword = () => {
    if (this.state.scramble.length === 0) {
      this.setState({
        password: '',
      })
      return;
    }
    let newPassword = ''
    let prevChar = '';
    let genArray = [...this.state.scramble]
    genArray = this.furtherScramble(genArray)
    for (let i = 0; i < this.state.length; i++) {
      const randomArray = Math.floor(Math.random() * genArray.length);
      let randomChar = prevChar;
      while (randomChar === prevChar) {
        randomChar = Math.floor(Math.random() * Math.floor(genArray[randomArray].length))
      }
      prevChar = randomChar
      newPassword += genArray[randomArray][randomChar];
      genArray = this.furtherScramble(genArray)
    }
    this.setState({
      password: newPassword
    })
  }

  render() {
    return(
      <Fragment>
        <h3>{this.state.password}</h3>
        <PasswordSlider sliderRef={this.slider} setPasswordLength = {this.setPasswordLength}/>
        <Checkbox name={'uppers'} checked={this.state.uppers} toggleBoxes={this.toggleBoxes} chars={'A-Z'}/>
        {/* <form>
          <label>
            <input type={'checkbox'} name={'uppers'} checked={this.state.uppers} onChange={this.toggleBoxes}/>
            A-Z
          </label>
          <label>
            <input type={'checkbox'} name={'lowers'} checked={this.state.lowers} onChange={this.toggleBoxes}/>
            a-z
          </label>
          <label>
            <input type={'checkbox'} name={'nums'} checked={this.state.nums} onChange={this.toggleBoxes}/>
            0-9
          </label>
          <label>
            <input type={'checkbox'} name={'symbols'} checked={this.state.symbols} onChange={this.toggleBoxes}/>
            !@#$%^&*
          </label>
        </form> */}
      </Fragment>
    )
  }
}

export default PasswordGenerator;