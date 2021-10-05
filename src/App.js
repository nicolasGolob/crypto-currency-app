import './App.css';
import React, {useState, useEffect} from 'react';

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
      <table>
          <thead>
              <tr>
                  <th>Symbol</th>
                  <th>Name</th>
              </tr>
          </thead>
          <tbody>
             {item.map(i=><tr key={i.id}>
                  <td>{i.symbol}</td>
                  <td>{i.name}</td>                 
              </tr>)} 
          </tbody>
      </table>
      </>
    </div>
  );
}

export default App;
