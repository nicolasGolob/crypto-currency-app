import './App.css';
import React, {useState, useEffect} from 'react';
import TableData from './TableData';

function App() {
  const [item, setItem] = useState([]);
  const data = process.env.REACT_APP_API_KEY

  useEffect(()=>{
    (async function(){
      const response = await fetch([data]);
      const dataReponse = await response.json();
      if(response.ok){
        setItem(dataReponse);
      }else{
        alert('An error has occurred');
      }
    })()
  },[data])
  return (
    <div className="App">
      <>
      {item.map(i=> 
        <TableData 
          key={i.id} 
          name={i.name}
          image={i.image}
          symbol={i.symbol}
          current_price={i.current_price}
          />
        )}
      </>
    </div>
  );
}

export default App;
