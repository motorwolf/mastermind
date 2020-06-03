import React, { Component } from 'react';
import { ColorRow } from './ColorRow';
import GuessButtons from './GuessButtons';
import { ColorTypes, GuessShape } from './Game';
import { COLORS } from '../App';

export interface GuessboxPropTypes {
    colors: ColorTypes[];
    guessLimit: number;
    checkGuess: (colors: ColorTypes[]) => GuessShape;
    sendGuess: (guess: GuessShape) => void;
}

class Guessbox extends Component<GuessboxPropTypes> {
    state = {
        colors: [],
    };

    handleColorAdd = (color: ColorTypes) => {
        let newColors = [...this.state.colors, color];
        if (newColors.length === this.props.guessLimit) {
            this.props.sendGuess(this.props.checkGuess(newColors));
            this.setState({ colors: [] });
        } else {
            this.setState({ colors: newColors });
        }
    };

    removeColor = (index: number) => {
        let newColors = [...this.state.colors];
        newColors.splice(index, 1);
        this.setState({ colors: newColors });
    };

    render() {
        return (
            <div className="resultholder">
                CURRENT GUESS:
                <ColorRow
                    colors={this.state.colors}
                    colorClickFn={this.removeColor}
                />
                <GuessButtons
                    colors={this.props.colors}
                    buttonFunction={this.handleColorAdd}
                />
            </div>
        );
    }
}

export default Guessbox;
