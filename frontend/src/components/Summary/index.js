import React from 'react';

const Summary = ({ models }) => {
    return (
        <div className="panel">
            <h2>Summary</h2>
            <ul>
                <li><span>Model:</span> <span>{models}</span></li>
                <li><span>Engine:</span> <span>the bestest</span></li>
                <li><span>Gearbox:</span> <span>YES</span></li>
                <li><span>Color:</span> <span>purple</span></li>
                <li><span>Price:</span> <span>1,4k</span></li>
            </ul>
        </div>
    )
}

export default Summary;