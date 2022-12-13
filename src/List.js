import React from 'react';
import useFetch from './useFetch';

function PrizeList() {
    const { data } = useFetch('http://api.nobelprize.org/v1/prize.json?year=2017&yearTo=2017')

    return (
        <div className="prize-list-2017-container">
            <h1>2017</h1>
            {data.map(prize => (
                <div key={prize.id}>
                    <h2>{prize.category}</h2>
                </div>
            ))}
            {console.log(data)}
        </div>
    )
}

export default PrizeList
