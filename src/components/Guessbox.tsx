import React, { Component } from 'react';
import { ColorRow } from './ColorRow';
import GuessButtons from './GuessButtons';
import { checkGuess } from './GameLogic';
import { GuessCorrectShape, COLORS, ColorTypes } from './GameTypes';

export interface GuessboxPropTypes {
    guessLimit: number;
    code: ColorTypes[];
    sendGuess: () => void;
}

class Guessbox extends Component<GuessboxPropTypes> {
    state = {
        colors: [],
    };

    handleColorAdd = (color: ColorTypes) => {
        let newColors = [...this.state.colors, color];
        if (newColors.length === this.props.guessLimit) {
            this.props.sendGuess(checkGuess(newColors, this.props.code));
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
                    colors={COLORS}
                    buttonFunction={this.handleColorAdd}
                />
            </div>
        );
    }
}

export default Guessbox;
