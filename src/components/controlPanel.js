import React, { Component } from 'react';
import { Grid, Button} from 'semantic-ui-react';

class ControlPanel extends Component {
    render() {
        return (
            <Grid columns={4} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Button fluid>(</Button>
                        <Button fluid>7</Button>
                        <Button fluid>4</Button>
                        <Button fluid>1</Button>
                        <Button fluid icon='github large' />
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid>)</Button>
                        <Button fluid>8</Button>
                        <Button fluid>5</Button>
                        <Button fluid>2</Button>
                        <Button fluid>0</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid>*</Button>
                        <Button fluid>9</Button>
                        <Button fluid>6</Button>
                        <Button fluid>3</Button>
                        <Button fluid>C</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid>/</Button>
                        <Button fluid>+</Button>
                        <Button fluid>-</Button>
                        <Button fluid>=</Button>
                    </Grid.Column>
                </Grid.Row>
                {/*<Grid.Row>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>7</Button>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>8</Button>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>9</Button>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>+</Button>*/}
                    {/*</Grid.Column>*/}
                {/*</Grid.Row>*/}
                {/*<Grid.Row>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>4</Button>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>5</Button>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>6</Button>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                        {/*<Button fluid>-</Button>*/}
                    {/*</Grid.Column>*/}
                {/*</Grid.Row>*/}
            </Grid>
        )
    }
}

export default ControlPanel;