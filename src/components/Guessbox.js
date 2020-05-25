import React, { Component } from 'react';
import { ColorRow } from './ColorRow';
import GuessButtons from './GuessButtons';

class Guessbox extends Component {
    state = {
        colors: [],
    };

    handleColorAdd = (color) => {
        let newColors = [...this.state.colors, color];
        if (newColors.length === this.props.guessLimit) {
            let correct = this.props.checkGuess(newColors);
            this.props.sendGuess({
                colorsGuessed: newColors,
                correct,
            });
            this.setState({ colors: [] });
        } else {
            this.setState({ colors: newColors });
        }
    };

    removeColor = (index) => {
        let newColors = [...this.state.colors];
        newColors.splice(index, 1);
        this.setState({ colors: newColors });
    };

    render() {
        return (
            <div className="resultholder">
                CURRENT GUESS:
                <ColorRow colors={this.state.colors} colorClickFn={this.removeColor}/>
                <GuessButtons colors={this.props.colors} buttonFunction={this.handleColorAdd}/>
            </div>
        );
    }
}

export default Guessbox;
