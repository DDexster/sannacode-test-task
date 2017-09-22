import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Calculator from './components/calc';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <Calculator/>
          </Container>
      </div>
    );
  }
}

export default App;
