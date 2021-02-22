import React from 'react';
import Auxiliary from './hoc/Auxiliary/Auxiliary';
import {Helmet} from 'react-helmet';

import List from './List/list';

function App() {
  return (
      <Auxiliary>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Ultimate Music List</title>
        </Helmet>
        <List />
      </Auxiliary>
  );
}

export default App;
