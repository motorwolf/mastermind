import React, { Component } from 'react';
import { ColorRow } from './ColorRow';
import GuessButtons from './GuessButtons';
import { ColorTypes, GuessShape, GuessCorrectShape } from './Game';
import { Consumer } from './Context';

export interface GuessboxPropTypes {
    colors: ColorTypes[];
    guessLimit: number;
    checkGuess: (colors: ColorTypes[]) => GuessCorrectShape;
    sendGuess: (guess: GuessShape) => void;
}

class Guessbox extends Component<GuessboxPropTypes> {
    state = {
        colors: [],
    };

    handleColorAdd = (color: ColorTypes) => {
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

    removeColor = (index: number) => {
        let newColors = [...this.state.colors];
        newColors.splice(index, 1);
        this.setState({ colors: newColors });
    };

    render() {
        return (
            <Consumer>
                {(context: GuessboxPropTypes) => (
                    <div className="resultholder">
                        CURRENT GUESS:
                        <ColorRow
                            colors={this.state.colors}
                            colorClickFn={this.removeColor}
                        />
                        <GuessButtons
                            colors={context.colors}
                            buttonFunction={this.handleColorAdd}
                        />
                    </div>
                )}
            </Consumer>
        );
    }
}

export default Guessbox;
