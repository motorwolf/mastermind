import React, { Component } from 'react';

class ResultBlock extends Component {

    blackArray = new Array(this.props.black);
    whiteArray = new Array(this.props.white);

    outputGuessResults = (num, color) => {
    let resultBlocks = [];
    if(num > 0){
      resultBlocks.push(<div className={`resultblock ${color}`}></div>);      
      resultBlocks = resultBlocks.concat(this.outputGuessResults(num - 1, color));
      return resultBlocks;
    }
    return [];
    }

    render(){
    //let thing = this.outputGuessResults(this.props.black,'black');
    //console.log(thing);
      return (
        <div className='resultholder colorblock'>
          {this.outputGuessResults(this.props.black,'black')}
          {this.outputGuessResults(this.props.white,'white')}
          {this.blackArray.map(blackBlock => {
            return <div className={`resultBlock black`}></div>
          })}
          {this.whiteArray.map(whiteBlock => {
            return <div className={`resultBlock white`}></div>
          })}
          {}
        </div>
      )
    }
}

export default ResultBlock;
