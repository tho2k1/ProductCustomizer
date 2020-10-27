import React from 'react';
import { useSelector } from "react-redux";

import CarImg from "./CarImg";
import getTotalPrice from "../../helpers/getTotalPrice";
import getColor from "../../helpers/getColor";

const Summary = () => {
    const data = useSelector(state => state.fetchedData.data);
    const selected = useSelector(state => state.optionsChanged);
    const { models, engines, gearboxes, colors } = selected;

    const price = getTotalPrice(data, selected)
    const color = getColor(data, selected.colors)
    console.log(color)

    return (
        <div className="panel">
            <h2>Summary</h2>
            <CarImg color={color} model={models}/>
            <ul>
                <li><span>Model:</span> <span>{models || "---"}</span></li>
                <li><span>Engine:</span> <span>{engines || "---"}</span></li>
                <li><span>Gearbox:</span> <span>{gearboxes || "---"}</span></li>
                <li><span>Color:</span> <span>{colors || "---"}</span></li>
                <li><span>Price:</span> <span>{price}</span> $</li>
            </ul>
        </div>
    )
}

export default Summary;