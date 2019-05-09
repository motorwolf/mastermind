import React, { Component } from 'react';
import ColorButton from './ColorButton';

class Guessbox extends Component {

  state = {
    colors: [],
  }

  handleColorAdd = (color) => {
    let newColors = [
      ...this.state.colors,
      color
    ];
    if(newColors.length === this.props.guessLimit){
      let correct = this.props.checkGuess(newColors);
      this.props.sendGuess({
        colorsGuessed: newColors,
        correct,
      });
      this.setState({colors: []});
    }
    else {
      this.setState({colors: newColors});
    }
  }

  render(){
    const { colors } = this.props;

    return (
      <div>
        CURRENT GUESS:
        { this.state.colors.map(color =>
          {
            return (<div> {color} </div>);
          })
        }
        GUESSBUTTONS:
        { colors.map(color => {
          return <ColorButton 
            color={ color }
            key={ color }
            addColor={ this.handleColorAdd } />
          })
        }
        Guessbox
      </div>
    );
  }
}

export default Guessbox;
