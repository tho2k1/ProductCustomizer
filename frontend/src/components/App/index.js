import React, { useState } from 'react';

import Filters from "../Filters";
import Summary from "../Summary";

const App = () => {
  const [ models, setModels ] = useState("")

  const handleOptionChange = event => {
    setModels(event.target.value)
  }

  console.log(models)
  return (
    <main className="main">
      <h1>Customize your car</h1>
      <div className="container">
        <Filters handleOptionChange={handleOptionChange}/>  
        <Summary models={models}/>
      </div>
    </main>
  );
}

export default App;
