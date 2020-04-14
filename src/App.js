import React from 'react';
import './App.css';
import Auxiliary from './hoc/Auxiliary/Auxiliary';

import List from './List/list';

function App() {
  return (
    <Auxiliary>
      <List />
    </Auxiliary>
  );
}

export default App;
