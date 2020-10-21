import React from 'react';
import { useSelector } from "react-redux";

const Summary = () => {
    const model = useSelector(state => state.models)
    const engine = useSelector(state => state.engines)
    const gearbox = useSelector(state => state.gearboxes)
    const color = useSelector(state => state.colors)

    return (
        <div className="panel">
            <h2>Summary</h2>
            <ul>
                <li><span>Model:</span> <span>{model || "---"}</span></li>
                <li><span>Engine:</span> <span>{engine || "---"}</span></li>
                <li><span>Gearbox:</span> <span>{gearbox || "---"}</span></li>
                <li><span>Color:</span> <span>{color || "---"}</span></li>
                <li><span>Price:</span> <span>1,4k</span></li>
            </ul>
        </div>
    )
}

export default Summary;