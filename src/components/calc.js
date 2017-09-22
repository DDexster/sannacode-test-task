import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

import ControlPanel from './controlPanel';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: "0"
        }
    }

    handleChange(e) {
        this.setState({
            statement: e.target.value
        })
    }

    render() {
        return (
            <div className="calculator">
                <Input fluid
                       size='massive'
                       value={this.state.statement}/>
                <ControlPanel/>
            </div>
        )
    }
}

export default Calculator;