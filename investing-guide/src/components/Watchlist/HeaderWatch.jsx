import {Currency, Star, ShieldHalf} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderWatch = (props) => {
    return(
        <div className = 'flex flex-col'>
        
        <div className = 'flex flex-row grow items-center px-4 justify-between  bg-gradient-to-l from-blue-500 h-36 divide-stone-800 flex-wrap'>
            <div className='flex flex-row justify-between'>
                <Link to = {'/'}>
                <div className = 'flex flex-row justify-between items-center  pb-2 mr-14 self-center'>
                    <ShieldHalf></ShieldHalf>
                    <h1 className = 'text-2xl font-bold px-2.5'>Safe investing</h1> 
                </div>
                </Link>
                <Link className='self-center' to = {'/'}>
                    <button className = "text-xl font-medium">Cryptocurrency</button>
                </Link>
            </div>           
        </div>
        <div className="border-b border-stone-300 w-full"></div>
        </div>
    )
}

export default HeaderWatch;