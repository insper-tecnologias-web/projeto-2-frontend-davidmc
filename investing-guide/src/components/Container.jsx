import { Bitcoin, Star, DollarSign, CandlestickChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Container = (props) => {
  
  const [watch, setWatch] = useState([]);
  const [uuidArray, setUuidArray] = useState([]);
  const uuidList = [];
 
  // Fetch watchlist data and update uuidArray when the component mounts
  useEffect(() => {
    axios.get("https://crypto-oracle-backend.onrender.com/api/watchlist/")
      .then((res) => {
        setWatch(res.data);
        res.data.map((coin) => {
          uuidList.push(coin.key)
          setUuidArray(uuidList);
        })
      });

    }); 
  
  
  const handleStar = (uuid) => {
    return uuidArray.includes(uuid);
  }
  
    

  const handleClick = (coin) => {
    axios.get("https://crypto-oracle-backend.onrender.com/api/watchlist/")
    .then((res) => {
      setWatch(res.data);
      res.data.map((coin) => {
        uuidList.push(coin.key)
        setUuidArray(uuidList);
      })
    });
    
    
    const data = {
      "name": coin.name,
      "symbol": coin.symbol,
      "price": coin.price,
      "iconUrl": coin.iconUrl,
      "rank": coin.rank,
      "key": coin.uuid,
      "change": coin.change,
      "marketCap": coin.marketCap,
      "volume": coin['24hVolume']
    };

    // Make the API request to update the watchlist
    axios.post(`https://crypto-oracle-backend.onrender.com/api/watchlist/${coin.uuid}/`, data)
      .then(() => {
        // After the request is successful, update the watchlist and uuidArray
        setWatch([...watch, data]);
        setUuidArray([...uuidArray, data.key]);
      });
  }

  const getVolume = (coin) => {
    // Check if the "volume" property exists, if not, use "24hVolume"
    if (coin.hasOwnProperty('volume')) {
      return coin.volume;
    } else if (coin.hasOwnProperty('24hVolume')) {
      return coin['24hVolume'];
    } else {
      return null; // Handle the case where the property is missing
    }
  };
  const getKey = (coin) => {
    // Check if the "volume" property exists, if not, use "24hVolume"
    if (coin.hasOwnProperty('key')) {
      return coin.key;
    } else {
      return coin.uuid;
    }
    
  };

  
  return (
    <div className='max-w-screen-3xl min-w-screen-sm flex justify-center grow overflow-x-scroll'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="text-md md:text-xl">#</TableHead>
            <TableHead className="text-md md:text-xl">Name</TableHead>
            <TableHead className="text-md md:text-xl">Price</TableHead>
            <TableHead className="text-md md:text-xl">Change(%)</TableHead>
            <TableHead className="text-md md:text-xl">Market Cap</TableHead>
            <TableHead className="text-md md:text-xl">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {props.coins.map((coin) => (
           
            <TableRow key={getKey(coin)}>
               
              <TableCell>
                <button onClick={() => handleClick(coin)}>  
                  <Star absoluteStrokeWidth={false} color =  {handleStar(getKey(coin)) ? "#ffc40c": "black"}className={`max-h-4 aling-center bg-origin-content`}></Star> 
                </button>
              </TableCell>
              <TableCell className='text-gray-700 font-semibold text-md md:text-lg self-center'>{coin.rank}</TableCell>
              <TableCell >
                <Link to = {`/coin/${getKey(coin)}`} className='flex flex-row space-between flex-wrap items-center'>
                <img className='max-h-7 md:max-h-11 mr-4' src={coin.iconUrl}></img>
                <div className='mr-4 text-black font-semibold text-md md:text-xl'>{coin.name}</div>
                <div className="font-medium text-gray-500 text-md md:text-xl">{coin.symbol}</div>
                </Link>
              </TableCell>
              <TableCell className="text-black font-semibold text-md md:text-xl self-center">{parseFloat(coin.price).toFixed(4)}</TableCell>
              <TableCell className="text-black font-semibold text-md md:text-xl self-center">{parseFloat(coin.change).toFixed(2)}</TableCell>
              <TableCell className="text-black font-semibold text-md md:text-xl self-center">{parseFloat(coin.marketCap).toFixed(2)}</TableCell>
              <TableCell className="text-black font-semibold text-md md:text-xl self-center">{parseFloat(getVolume(coin)).toFixed(2)}</TableCell>
            </TableRow>
           
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Container;
