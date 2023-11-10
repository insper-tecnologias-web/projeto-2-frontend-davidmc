import { useState, useEffect } from "react"
import axios from "axios"
import HeaderWatch from "../Watchlist/HeaderWatch";



    
const getCoin = async(options) => {
    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const Coin = (props) => {
    const [coin, setCoin] = useState({})
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${props.coinKey}`,
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h'
        },
        headers: {
            'X-RapidAPI-Key': '9dc0cd25c5msh7093cea7eab33dbp1ed6d1jsne0b3a44acc73',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
        };
    useEffect(() => {
        getCoin(options)
        .then((response) => {
          setCoin(response.data.data.coin)
        })
      })

    return(
        
        <div className = 'bg-white h-full w-max-screen-3xl w-min-screen-sm'>
            <HeaderWatch/>
            <div className='flex flex-row flex-wrap mt-11'>
                <img className='max-h-20 mx-4' src={coin.iconUrl}></img>
                <div className = 'flex flex-col'>
                    <h1 className='mr-4 text-black text-3xl font-semibold'>{coin.name}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin.symbol}</h1>
                    <h1 className=' mt-4 text-black text-5xl font-bold'>$ {parseFloat(coin.price).toFixed(2)}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin.change}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin.marketCap}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin['24hVolume']}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin.numberOfMarkets}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin.numberOfExchanges}</h1>
                    <h1 className="font-medium text-2xl text-gray-500">{coin.allTimeHigh.price}</h1>

                </div>
                <h1>{coin.description}</h1>
            </div>
            
        </div>
    )
}
export default Coin