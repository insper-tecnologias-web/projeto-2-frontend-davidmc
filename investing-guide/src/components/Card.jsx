const Card = (props) => {
    return (
        <div className = ' grow ml-7 mt-10 mr-4 mx-0.5 md:mx-36 min-w-fit max-w-screen-md rounded-xl border border-solid border-blue-500  p-7 border-2'>
            <h1 className = ' font-mono font-black text-xl md:text-2xl'>Market Data in Real Time</h1>
            <div className = 'flex flex-row justify-start'>
                <div className="flex flex-col mr-9 mt-5">
                    <h1 className = 'text-black font-bold' >Total Market Cap</h1>
                    <h1 className = 'text-black font-semibold'>{props.totalMarketCap}</h1>
                </div>
                <div className="flex flex-col mt-5">
                    <h1 className = 'text-black font-bold'>Volume(24h)</h1>
                    <h1 className = 'text-black font-semibold'>{props.total24Volume}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card