import React  from 'react';
import { useDispatch } from "react-redux";
import { changeOption } from "../../actions";

import Filters from "../Filters";
import Summary from "../Summary";

const App = () => {
  const dispatch = useDispatch();

  const handleOptionChange = event => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    dispatch(changeOption(targetName, targetValue)) 
  }

  return (
    <main className="main">
      <h1>Customize your car</h1>
      <div className="container">
        <Filters handleOptionChange={handleOptionChange}/>  
        <Summary />
      </div>
    </main>
  );
}

export default App;
