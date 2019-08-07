import React from 'react';

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
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    this.setState({
      length: event.target.value
    }, () => this.populateScramble())
  }

  toggleBoxes = (event) => {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    }, () => this.populateScramble())
  }

  populateScramble = () => {
    let scrambleString = '';
    if (this.state.uppers) {
      scrambleString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.state.lowers) {
      scrambleString += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.state.nums) {
      scrambleString += '0123456789';
    }
    if (this.state.symbols) {
      scrambleString += '!@#$%^&*';
    }
    this.setState({
      scramble: scrambleString.split('')
    }, () => this.generateNewPassword())
  }

  generateNewPassword = () => {
    let newPassword = ''
    for (let i = 0; i < this.state.length; i++) {
      const rando = Math.floor(Math.random() * Math.floor(this.state.scramble.length))
      newPassword += this.state.scramble[rando];
    }
    this.setState({
      password: newPassword
    })
  }

  render() {
    return(
      <div>
        <h3>{this.state.password || 'Password'}</h3>
        <input className='length-input' value={this.state.length} type='number' onChange={this.setPasswordLength} placeholder={'Set Password Length'}/>
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
      </div>
    )
  }
}

export default PasswordGenerator;