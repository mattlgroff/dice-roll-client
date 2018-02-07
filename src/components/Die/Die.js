import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor(){
    super();

    this.state = {
      class: 'decent'
    }
  }

  // Runs on every mount to ensure that the die is 
  // colored correctly for crit success or fail
  refreshCss(){
    let size = parseInt(this.props.size, 10)

    if(this.props.value === size){
      this.setState({'class':'crit_success'})
    }
    else if(this.props.value === 1){
      this.setState({'class':'crit_fail'})
    }
  }

  componentDidMount(){
   this.refreshCss(); 
  }

  render() {
    return (
      <div className="Die">
        <span className={this.state.class}>{this.props.value}</span>
      </div>
    );
  }
}

export default Die;
