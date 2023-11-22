import React, { Component } from 'react'
import Button from '@mui/material/Button';
import './q1.css';

export default class q1 extends Component {
   constructor(props){
    super(props);
    this.state={count:0};
   }
   handleIncrement=()=>{
    this.setState(prevState=>({count:prevState.count+1}));
   }
  render() {
    return (
      <div className='big'>
          <p>Count : {this.state.count}</p>
          <Button variant="contained" color="success" onClick={this.handleIncrement}>
        Increment
      </Button>
      </div>
    )
  }
}
