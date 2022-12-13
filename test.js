import { render } from '@testing-library/react';
import React from 'react';
import '../App';
class Bike extends React.Component
{
    constructor(props){
       super(props);
       this.state = {
       
        brand:"Royal Enfield",
        model:"himalayan",
        color:"black",
        year:2022
       };
}
changeColor =()=>
{
    this.setState({color:"Blue"})
}
changeColor1 =() =>{
    this.setState({model:"busan"})
}

render(){
    return(
        <div>
            <h1>My{this.state.brand}</h1>
            <p>
                It is a {this.state.color} and color is {this.state.model} and year is from{this.state.year}.
            </p>
            <button type='button'onClick={this.changeColor}>change color</button>
            <button type='button'onClick={this.changeColor1}>change model</button>
        </div>
    );
}
}
export default Bike;