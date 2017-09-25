import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';


class ControlPanel extends Component {
    render() {
        return (
            <Grid columns={4} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Button fluid color='grey' onClick={() => this.props.calculate('(')}>(</Button>
                        <Button fluid onClick={() => this.props.calculate('7')}>7</Button>
                        <Button fluid onClick={() => this.props.calculate('4')}>4</Button>
                        <Button fluid onClick={() => this.props.calculate('1')}>1</Button>
                        <Button fluid
                                href="https://github.com/DDexster/sannacode-test-task"
                                target="_blank"
                                style={{ 'height': '40px', "padding": "7px 20px" }}>
                            <Icon name="github" size="big"/>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid color='grey' onClick={() => this.props.calculate(')')}>)</Button>
                        <Button fluid onClick={() => this.props.calculate('8')}>8</Button>
                        <Button fluid onClick={() => this.props.calculate('5')}>5</Button>
                        <Button fluid onClick={() => this.props.calculate('2')}>2</Button>
                        <Button fluid style={{ 'height': '40px' }} onClick={() => this.props.calculate('0')}>0</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid color='grey' onClick={() => this.props.calculate('*')}>*</Button>
                        <Button fluid onClick={() => this.props.calculate('9')}>9</Button>
                        <Button fluid onClick={() => this.props.calculate('6')}>6</Button>
                        <Button fluid onClick={() => this.props.calculate('3')}>3</Button>
                        <Button fluid color='red' style={{ 'height': '40px' }}
                                onClick={() => this.props.calculate('C')}>C</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid color='grey' onClick={() => this.props.calculate('/')}>/</Button>
                        <Button fluid color='grey' onClick={() => this.props.calculate('+')}>+</Button>
                        <Button fluid color='grey' onClick={() => this.props.calculate('-')}>-</Button>
                        <Button fluid color='orange' style={{ 'height': '84px' }}
                                onClick={() => this.props.calculate('=')}>=</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default ControlPanel;