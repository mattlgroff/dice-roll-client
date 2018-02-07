import React, { Component } from 'react';
import Dice from '../Dice/Dice';
import Axios from '../../utility/Axios.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      num_of_dice: 1,
      size_of_dice: 20,
      dice: [],
      total: 0,
      min: 0,
      max: 0,
      input: '0d0',
      error_msg: ''
    }
  }

  handleChangeNum = event => {
    this.setState({num_of_dice:event.target.value})
  }

  handleChangeSize = event => {
    this.setState({size_of_dice:event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();

    Axios.rollDice(this.state.num_of_dice, this.state.size_of_dice)
    .then(res => {
      const data = res.data.results;

      // If an error message exists
      if(res.data.error_msg){
        this.setState({'error_msg': res.data.error_msg})
      }
      // If no error message
      else{
        this.setState(
        {
          'min': data.min,
          'max': data.max,
          'dice': data.results,
          'total': data.total
        })
      }
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <div className="App container">
        <h1>React Dice-As-A-Service Client</h1>
        <p>This is a client for my microservice dice-roll Node.js server. <a href='https://github.com/mattlgroff/dice-as-a-service/'>You can find the Github repo here.</a></p>

        <div className="container">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label className="form-group">
              Number of Dice<br></br>
              <input type="number" name="num_of_dice" min="1" placeholder="1" onChange={this.handleChangeNum} />
            </label>
            <br></br>
            <label className="form-group">
              Size of Die<br></br>
              <input type="number" name="size_of_dice" min="1" placeholder="20" onChange={this.handleChangeSize} />
            </label>
            <br></br>
            <input className='btn btn-default form-group' type="submit" value={`Roll ${this.state.num_of_dice}d${this.state.size_of_dice}`} />
          </form>
          <Dice dice={this.state.dice} num={this.state.num_of_dice} size={this.state.size_of_dice} total={this.state.total} />
        </div>
      </div>
    );
  }
}

export default App;
