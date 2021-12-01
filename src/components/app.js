// vim:sw=4:sts=4:ts=4:tw=120:et:nu:rnu:mouse=a:nowrap:
// ---------------------------------------------------------------------------

import React, { Component } from 'react';

import ExprBox from './exprbox';
import Controls from './controls';

// ---------------------------------------------------------------------------

/**
 * Main Component
 */

let randPair = (max) => {
    let a = ( Math.floor(Math.random() * 100) ) % max;
    let b = ( Math.floor(Math.random() * 100) ) % max;
    return [a,b];
}

class App extends Component {

    constructor() {
        super();
        this.state = this.init_state();
    }

    componentDidMount() {
        let initial_state = this.init_state();
        this.setState(initial_state, ()=>{
            console.log("state: ", this.state);
        });
    }

    // -----------------------------------------------------------------------

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="title">Sophia's Multiplication Flash Cards</h1>
                </header>
                <ExprBox expr={this.state.expr} answer={this.state.answer}/>
                <Controls 
                    revealAnswer={this.revealAnswerButton}
                    randExpr={this.randExprButton}
                />
            </div>
        );
    }

    // -----------------------------------------------------------------------

    init_state = () => {
        let p = randPair(11);
        return {
            expr: p,
            answer: "?",
            max: 11,
        };
    }

    randExprButton = () => {
        this.setState( this.init_state() , () => {
            console.log("state: ", this.state);
        });
    }

    revealAnswerButton =() => {
        this.setState( {"answer":this.state.expr[0] * this.state.expr[1]}, () => {
            console.log("state: ", this.state);
        });
    }
}

export default App;
