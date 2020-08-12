import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Auxiliary from './hoc/Auxiliary/Auxiliary';

import List from './List/list';

function App() {
  return (
    <Jumbotron>
      <Auxiliary>
        <List />
      </Auxiliary>
    </Jumbotron>
  );
}

export default App;
