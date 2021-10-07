import React from 'react';
import './TableData.css';

export default function TableData({name, image, symbol, current_price, price_change_24h, price_change_percentage_24h}) {
    return (
        <>
            <tbody className="my-3 text-center">   
                <tr>
                    <td><img src={image} alt='symbol' className="pt-2"/></td>
                    <td className="pt-4">{name}</td>
                    <td className="pt-4">{symbol}</td>
                    <td className="pt-4">{current_price.toFixed(2)}€</td>
                    <td className="pt-4">{price_change_24h.toFixed(2)}€</td>
                    {
                        price_change_percentage_24h < 0 ?
                        (<td className="crypto-percent-red pt-4">{price_change_percentage_24h.toFixed(2)}%</td>) 
                            :  
                        (<td className="crypto-percent-green pt-4">+{price_change_percentage_24h.toFixed(2)}%</td>)                            
                    }
                </tr>
            </tbody>         
        </>
    )
}


 /* <div className="table-row">
                    <div className="table-coin">
                        <img src={image} alt='symbol'/>
                        <h4 className="coin-title">{name}</h4>   
                        <p className="coin-symbol">{symbol}</p>   
                                <p className="crypto-current-price">{current_price}€</p>
                                <p className="">{price_change_24h}€</p>
                                {
                                    price_change_percentage_24h < 0 ?
                                    (<p className="crypto-percent-red">{price_change_percentage_24h}%</p>) 
                                        :  
                                    (<p className="crypto-percent-green">+{price_change_percentage_24h}%</p>)                            
                                }
                    </div>
                </div>
            </div>          */

