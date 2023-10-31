import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import Header from './components/Header.jsx'
import Container from './components/Container'


export default function App() {
  return (
    <div className = 'bg-white h-full'>
      <Header/>
      <div className = 'flex flex-row grow justify-evenly my-16'>
        <Container title = "Stocks" asset = "PETR4" price = "24,90" variation = "+2%"/>
        <Container title = "Acoes" asset = "PETR4" price = "24,90" variation = "+2%"/>
        <Container title = "CryptoCurrencies" asset = "PETR4" price = "24,90" variation = "+2%"/>
      </div>
    </div>
    
  )
}
