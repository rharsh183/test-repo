import React from 'react';
import UseFetch from './UseFetch';

function PrizeList() {
    const { data } = UseFetch('http://api.nobelprize.org/v1/prize.json?year=2022&yearTo=2022')

    return (
        <div className="prize-list-2017-container">
            <h1>2017</h1>
            {data && data.prizes && data.prizes.map(prize =>  (
                <div key={prize.id}>
                    <h2>{prize.category}</h2>
                </div>
            ))}
            {console.log(data)}
        </div>
    )
}

export default PrizeList
