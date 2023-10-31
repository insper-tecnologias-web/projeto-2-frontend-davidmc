import {Bitcoin, Star} from 'lucide-react';
const Container = (props) => {
    return(
        <div className = 'flex flex-col grow mx-2.5'>
            <div className = 'flex flex-row items-center my-2.5'>
                <Bitcoin></Bitcoin>
                <h1 className = 'mx-0.5 text-2xl'>{props.title}</h1>
            </div>
            
            <div className=" flex flex-col grow bg-gradient-to-t from-blue-300 h-max rounded-md border-2 border-blue-100 px-4 py-4">
                <div className='flex flex-row justify-between align-center mb-2.5'>
                    <h2 className="text-xl">{props.asset}</h2>
                    <button><Star></Star></button>
                </div>
                
                <div className ="flex flex-row justify-between grow mx-1.5">
                    <h3 className="text-xl">{props.price}</h3>
                    <h3 className="text-xl">{props.variation}</h3>
                </div>
                
                <div className="border-b border-stone-800 w-full my-2"></div>
            </div>
            
        </div>
    )
}

export default Container;