import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {

  const [cryptoData, setCryptoData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&currency=USD').then((response) => {
      console.log(response.data);
    setCryptoData(response.data.coins);
    })
  }, [])

  const filteredCoins = cryptoData.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App">
      <nav>
        <h1>CoinBase</h1>
      </nav>
      <div className='cryptoHeader'>
        <input type='text' placeholder='Search Cryto' onChange={(event) => {setSearchWord(event.target.value)}}/>
      </div>
      <div className='cryptoBody'>
        {filteredCoins.map((coin) => {
          return <Coin 
          name={coin.name} 
          icon={coin.icon} 
          price={coin.price} 
          symbol={coin.symbol} 
          />
        }
        )}
      </div>
    </div>
  );
}

export default App;
