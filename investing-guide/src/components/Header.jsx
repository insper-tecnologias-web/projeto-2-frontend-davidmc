import {Currency, Star} from 'lucide-react';

const Header = (props) => {
    return(
        <div>
        <div className = 'flex flex-row grow items-center px-4 justify-between  bg-gradient-to-l from-blue-300 w-full h-20 divide-stone-800'>
            <div className='flex flex-row align-center justify-between'>
                <div className = 'flex flex-row justify-between items-center mr-20 self-center'>
                    <Currency></Currency>
                    <h1 className = 'text-2xl font-bold px-2.5'>Investing Guide</h1>
                </div>
                <div className = "space-x-10 self-center">
                    <button className = " text-xl/8 font-medium">Stocks</button>
                    <button className = " text-xl/8 font-medium">Ações BR</button>
                    <button className = "text-xl/8 font-medium">Crypto</button>
                </div>
            </div>
            <div className = 'flex flex-row'>
                <Star></Star>
                <button className = 'text-lg font-light px-2.5'>Watchlist</button>
                
            </div>
        </div>
        <div className="border-b border-stone-800 w-full"></div>
        </div>
    )
}

export default Header;