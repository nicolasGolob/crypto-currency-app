import React from 'react'

export default function TableData({name, image, symbol, current_price, market_cap_change_percentage_24h}) {
    return (
        <>
            <div className="table-container">
                <div className="table-body">
                    <div className="table-coin">
                        <h1>{name}</h1>   
                        <img src={image} alt='symbol'width={50} height={50}/>
                        <p className="coin-symbol">{symbol}</p>   
                            <div className="coin-data">
                                <p>{current_price}</p>
                                <p>{market_cap_change_percentage_24h}%</p>
                            </div>                 
                    </div>
                </div>
            </div>         
        </>
    )
}
