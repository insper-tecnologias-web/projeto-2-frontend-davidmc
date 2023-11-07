import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import Header from './components/Header.jsx'
import Container from './components/Container'
import {Bitcoin, Star, DollarSign, CandlestickChart} from 'lucide-react';
import axios from 'axios'
import Card from './components/Card'

const coinsOptions = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '9dc0cd25c5msh7093cea7eab33dbp1ed6d1jsne0b3a44acc73',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const getCrypto = async() => {
  try {
      const response = await axios.request(coinsOptions);
      return response;
  } catch (error) {
      console.error(error);
  }
}

export default function App() {
  const [coins, setCoins] = useState([]);
  const[totalMarketCap, setTotalMarketCap] = useState()
  const[totalVolume, setTotal24Volume] = useState()
  // const response = await getCrypto();

  useEffect(() => {
    const response = getCrypto()
    .then((response) => {
      setCoins(response.data.data.coins);
      setTotalMarketCap(response.data.data.stats.totalMarketCap);
      setTotal24Volume(response.data.data.stats.total24hVolume);
    })
  }, [])



  return (
    <div className = 'bg-white h-full w-max-screen-3xl w-min-screen-sm'>
      
      <Header/>
      <Card total24Volume = {parseFloat(totalVolume).toFixed(2)} totalMarketCap = {parseFloat(totalMarketCap).toFixed(2)}></Card>
      <h1 className = 'ml-7 mt-10 mr-4 font-mono font-black text-xl md:text-2xl mx-0.5 md:mx-36'>50 biggest Cryptocurrencies by Market Cap</h1>
      <div className = 'flex flex-row grow justify-evenly mb-16 mt-7 mx-0.5 md:mx-20 '>
        <Container icon = {Bitcoin} title = "Cryptocurrencies" coins = {coins}/>
        
      </div>
    </div>
    
  )
}
