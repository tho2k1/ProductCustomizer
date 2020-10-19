import React from 'react';

import { data } from "../../data";

const Filters = () => {
    const { models, engines, gearboxes, colors } = data;
    console.log(data)

    return (
        <form>
            <div>
                <h2>Model</h2>
                <ul className="filtersList">
                    {models.map(model => (<li>
                        <input type="radio" name="model" id={model.name} className="radio"/>
                        <label htmlFor={model.name}>{model.name}</label>
                    </li>) )}              
                </ul>
            </div>
            <div>
                <h2>Engine</h2>
                <ul className="filtersList">
                    {engines.map(engine => (<li>
                        <input type="radio" name="engine" id={engine.name} className="radio"/>
                        <label htmlFor={engine.name}>{engine.name}</label>
                    </li>) )}                  
                </ul>
            </div>
            <div>
                <h2>Gearbox</h2>
                <ul className="filtersList">
                    {gearboxes.map((gearbox, index) => (<li>
                        <input type="radio" name="gearbox" id={`gearbox${index}`} className="radio"/>
                        <label htmlFor={`gearbox${index}`}>{gearbox}</label>
                    </li>) )}               
                </ul>
            </div>
            <div>
                <h2>Color</h2>
                <ul className="filtersList">
                    {colors.map((color, index) => (<li>
                        <input type="radio" name="color" id={`color${index}`} className="radio"/>
                        <label htmlFor={`color${index}`}>{color}</label>
                    </li>) )}               
                </ul>
            </div>
        </form>
    )
}

export default Filters;