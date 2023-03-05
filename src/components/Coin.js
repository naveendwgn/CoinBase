import React from 'react';

function Coin({name, icon, price, symbol}) {
    return (
        <div className='coin'>
            <h1>{name}</h1>
            <img src={icon} alt='crypto' />
            <h3> Price: {price} USD</h3>
            <h3> {symbol}</h3>
        </div>
    )
}

export default Coin;