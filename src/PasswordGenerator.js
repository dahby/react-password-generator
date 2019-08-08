import React from 'react';
import Slider from '@material-ui/core/slider'

class PasswordGenerator extends React.Component {
  constructor(){
    super();
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

  setPasswordLength = (event) => {
    this.setState({
      length: parseInt(event.target.textContent, 10)
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
    if (this.state.symbols) {
      scrambleArray.push('!@#$%^&*');
    }
    if (this.state.lowers) {
      scrambleArray.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (this.state.nums) {
      scrambleArray.push('0123456789');
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
      console.log(arr);
    }
    return arr;
  }

  generateNewPassword = () => {
    if (this.state.scramble.length === 0) {
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
      <React.Fragment>
        <div className='slider'>
          <h3>{this.state.password || 'Password Goes Here'}</h3>
          <Slider valueLabelDisplay={'auto'} onChangeCommitted={this.setPasswordLength} min={0} max={32}/>
        </div>
        <form>
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
        </form>
      </React.Fragment>
    )
  }
}

export default PasswordGenerator;