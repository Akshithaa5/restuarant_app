import Header from "./Component/Layout/Header";

import { Fragment } from 'react';

import Meals from "./Component/Meals/Meals";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;