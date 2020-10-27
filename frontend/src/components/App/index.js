import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchData } from "../../actions";

import Filters from "../Filters";
import Summary from "../Summary";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [])

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
