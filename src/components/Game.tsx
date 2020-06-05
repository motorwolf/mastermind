import React, { Component } from 'react';
import { GuessBox } from './GuessBox';
import PreviousGuesses from './PreviousGuesses';
import { GameStyles } from './GameStyles';
import { theme } from '../Theme';

export type ColorTypes =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple';

export type CheckedType = ColorTypes | null;

export interface GuessShape {
    guess: ColorTypes[];
    black: number;
    white: number;
}

export interface GameProps {
    secretCode: ColorTypes[];
    codeLength: number;
    colors: ColorTypes[];
}

export const StyledGame = ({ children }: any) => {
    const classes = GameStyles({ theme });
    return <div className={classes.gameContainer}>{children}</div>;
};

export class Game extends Component<GameProps> {
    state = {
        guesses: [],
    };

    checkGuess = (guess: ColorTypes[]) => {
        let code: CheckedType[] = [...this.props.secretCode];
        let guessCopy: CheckedType[] = [...guess];
        let black = 0;
        let white = 0;
        for (let i = 0; i < code.length; i++) {
            if (code[i] === guessCopy[i]) {
                code[i] = null;
                guessCopy[i] = null;
                black++;
            }
        }
        if (black === this.props.codeLength) {
            console.log(
                'YOUVE WON!!! OH MAN! BET YOU EXPECTED MORE THAN A CONSOLE LOGGED MESSAGE!'
            );
        } else {
            code = code.filter((x) => x);
            guessCopy = guessCopy.filter((x) => x);
            for (let i = 0; i < guessCopy.length; i++) {
                let colorCodeIndex = code.indexOf(guessCopy[i]);
                if (colorCodeIndex !== -1) {
                    code.splice(colorCodeIndex, 1);
                    white++;
                }
            }
        }
        return {
            guess,
            black,
            white,
        };
    };

    receiveGuess = (guess: GuessShape) => {
        const guesses = [...this.state.guesses, guess];
        this.setState({ guesses });
    };

    render() {
        const { colors, codeLength } = this.props;
        return (
            <StyledGame>
                <PreviousGuesses guesses={this.state.guesses} />
                <GuessBox
                    colors={colors}
                    guessLimit={codeLength}
                    checkGuess={this.checkGuess}
                    sendGuess={this.receiveGuess}
                />
            </StyledGame>
        );
    }
}
