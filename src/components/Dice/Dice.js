import React, { Component } from 'react';
import Die from '../Die/Die';
let id = 0; //Give our die's unique key values

class Dice extends Component {
  
  render() {
    return (
      <div className="Dice">
        Click above to roll the dice!
        <h3>Total Value: {this.props.total}</h3>
        <hr></hr>
        <h3>Invidiual Die Rolls:</h3>
        {
          
          this.props.dice.map(value => {
            id += 1;

            return (
              <Die key={id} value={value} size={this.props.size}/>
            )
          })
        }
      </div>
    );
  }
}

export default Dice;
