import React from 'react';

import Filters from "../Filters";
import Summary from "../Summary";

const App = () => {
  return (
    <main className="main">
      <h1>Customize your car</h1>
      <div className="container">
        <Filters />  
        <Summary />
      </div>
    </main>
  );
}

export default App;
