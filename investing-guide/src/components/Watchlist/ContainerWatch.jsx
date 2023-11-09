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

const ContainerWatch = (props) => {
    
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
            <TableHead className="#"></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change(%)</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.coins.map((coin) => (
            <TableRow key={getKey(coin)}>
              <TableCell>
                <button>  
                  <Star absoluteStrokeWidth={false} color = "#ffc40c" className={`max-h-4 aling-center bg-origin-content`}></Star> 
                </button>
              </TableCell>
              <TableCell className='text-gray-700 font-semibold'>{coin.rank}</TableCell>
              <TableCell className='flex flex-row space-between flex-wrap'>
                <img className='max-h-7 mr-4' src={coin.iconUrl}></img>
                <div className='mr-4 text-black font-semibold'>{coin.name}</div>
                <div className="font-medium text-gray-500">{coin.symbol}</div>
              </TableCell>
              <TableCell className="text-black font-semibold">{parseFloat(coin.price).toFixed(4)}</TableCell>
              <TableCell className="text-black font-semibold">{parseFloat(coin.change).toFixed(2)}</TableCell>
              <TableCell className="text-black font-semibold">{parseFloat(coin.marketCap).toFixed(2)}</TableCell>
              <TableCell className="text-black font-semibold">{parseFloat(getVolume(coin)).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContainerWatch;
