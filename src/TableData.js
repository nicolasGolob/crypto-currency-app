import React from 'react'

export default function TableData({name, image, symbol, current_price}) {
    return (
        <>
        <table>
          <tbody>
              <tr>
                  <td>{name}</td>   
                  <img src={image} alt='symbol'width={50} height={50}/>
                  <td>{symbol}</td>   
                  <td>{current_price}</td>                 
              </tr>
          </tbody>
        </table>         
        </>
    )
}
