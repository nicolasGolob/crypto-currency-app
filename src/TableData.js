import React from 'react'


export default function TableData({name, image, symbol, current_price, price_change_24h, price_change_percentage_24h}) {
    return (
        <>
            <div className="table-container">
                <div className="table-body">
                    <div className="table-coin">
                        <img src={image} alt='symbol'width={55} height={55}/>
                        <h4>{name}</h4>   
                        <p className="coin-symbol">{symbol}</p>   
                            <div className="coin-data">
                                <p className="crypto-current-price">{current_price}€</p>
                                <p className=""> + {price_change_24h}€</p>
                                {
                                    price_change_percentage_24h < 0 ?
                                    (<p className="crypto-percent-red">{price_change_percentage_24h}%</p>) 
                                        :  
                                    (<p className="crypto-percent-green">+{price_change_percentage_24h}%</p>)                            
                                }
                            </div>                 
                    </div>
                </div>
            </div>         
        </>
    )
}
