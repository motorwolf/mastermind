import React, { Component } from 'react';
import ColorButton from './ColorButton';
import ColorBlock from './ColorBlock';


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
        <div className="resultholder">
        CURRENT GUESS:
        { this.state.colors.map(color =>
          {
            return (
                <ColorBlock color={color} />
              );
          })
        }
        </div>
        GUESSBUTTONS:
        { colors.map(color => {
          return <ColorButton 
            color={ color }
            key={ color }
            addColor={ this.handleColorAdd } />
          })
        }
      </div>
    );
  }
}

export default Guessbox;
