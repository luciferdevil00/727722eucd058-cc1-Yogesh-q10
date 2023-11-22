import React, { Component } from 'react'
import './q10.css';
import Button from '@mui/material/Button';

export default class q10 extends Component {
    constructor(props){
        super(props);
        this.state={count:parseInt(this.props.age)};
       }
       handleIncrement=()=>{
        this.setState(prevState=>({count:prevState.count + 1}));
       }
       handleDecrement=()=>{
        this.setState(prevState=>({count:prevState.count - 1}))
       }
       
      render(){
        return (
          <div className='big'>
              <p>Name : {this.props.name} </p>
              <p>Age : {this.state.count} </p>
              <Button variant="contained" color="secondary" onClick={this.handleIncrement}>
            Get Older
              </Button>
              <span>  </span>
              <Button variant="contained" color="secondary" onClick={this.handleDecrement}>
             Make Younger
          </Button>
          </div>
        )
  }
}
