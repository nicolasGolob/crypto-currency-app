import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './TableData';
import './TableData.css';

function App() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState([]);
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
  const cryptoSearch = item.filter(items=>
    items.name.toLowerCase().includes(search)
  )
  return (
    <>
    <div className="container py-3">
      <div className="row"> 
        <form className="col-12 text-center">
          <h3>Search a Crypto Currency</h3>
          <input type="text" className="search-input mb-2" onChange={handleSearch} placeholder="Search a crypto"/>
        </form>
      </div>
    </div>
    <div class="container">
      <div class="pt-3 justify-content-center text-center row">
          <div class="table-responsive-lg col-lg-12 col-md-12 col-sm-12">
              <table class="table text-center">
                <tr>
                  <th className="pb-3">Logo</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Symbol</th>
                  <th className="pb-3">Current Price</th>
                  <th className="pb-3">Price Change 24h</th>
                  <th className="pb-3">Price Change Percentage</th>
                </tr>                             
                  {cryptoSearch.map(i=> 
                    <TableData 
                      key={i.id} 
                      name={i.name}
                      image={i.image}
                      symbol={i.symbol}
                      current_price={i.current_price}
                      price_change_24h={i.price_change_24h}
                      price_change_percentage_24h={i.price_change_percentage_24h}
                      />
                    )}
                </table>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
