import React, { Component } from 'react';
import { Input, Message } from 'semantic-ui-react';
import calculate from '../services/stringCalc';

import ControlPanel from './controlPanel';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: "0",
            error: null,
        }
    }

    handleCalculations(symbol) {
        const currentState = this.state;
        if (symbol === 'C') {
            this.setState({
                statement: "0",
                error: null
            });
        } else if (symbol === "=") {
            const result = calculate(currentState.statement);
            this.setState({
                statement: "= " + result.value,
                error: result.errorMessage.length > 0 ? result.errorMessage : null
            });
        } else {
            if (currentState.statement === "0" || currentState.statement.startsWith('=')) {
                this.setState({
                    statement: symbol,
                    error: null

                })
            } else {
                this.setState({
                    statement: currentState.statement + symbol
                });
            }
        }

    }


    render() {
        const error = this.state.error;
        return (
            <div className="calculator">
                <Input fluid
                       disabled
                       size='massive'
                       value={this.state.statement}
                />
                {error ?
                    <Message size='mini' color='red'>{error}</Message> : null
                }
                <ControlPanel calculate={this.handleCalculations.bind(this)}/>
            </div>
        )
    }
}

export default Calculator;