import './App.css';
import React, {useState, useEffect} from 'react';
import TableData from './TableData';

function App() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState();
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

  function handleSearch(event){
    setSearch(event.target.value);
  }

  const filterBitcoins = item.filter(item=>
    item.name.toLowerCase().includes(search)
  )

  return (
    <>
    <div className="crypto-app">
      <div className="crypto-search"> 
        <p>Search a bitcoin with her data</p>
        <form>
          <input type="text" className="search-input" onChange={handleSearch} placeholder="Search a crypto"/>
        </form>
      </div>
      {filterBitcoins.map(i=> 
        <TableData 
          key={i.id} 
          name={i.name}
          image={i.image}
          symbol={i.symbol}
          current_price={i.current_price}
          market_cap_change_percentage_24h={i.market_cap_change_percentage_24h}
          />
        )}
    </div>
    </>
  );
}

export default App;
