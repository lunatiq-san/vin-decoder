import DecodeList from "./components/DecodeList";
import Searchbar from "./components/Searchbar";
import { useState } from "react";
import ListMostRecentDecoded from "./components/ListMostRecentDecoded";
import axios from "axios";
import { RequestContext } from "./contexts/requestContext";

axios.defaults.baseURL = "https://vpic.nhtsa.dot.gov/api/";

function App() {
  const [lastRequests, setLastRequests] = useState([]);

  return (
    <div className="App">
      {/* Форма ввода VIN-кода */}
      <RequestContext.Provider value={[lastRequests, setLastRequests]}>
        <h2>Декодирование номеров VIN</h2>
        <Searchbar />

        {/* Список из 5 последних расшифрованных кодов */}
        {/* {vin.length > 0 ? <ListMostRecentDecoded /> : "Search list is empty"} */}
        <h2>Список последних декодированных номеров VIN</h2>
        <ListMostRecentDecoded />
      </RequestContext.Provider>
      {/* {listDecoded.length > 0 ? (
        <ul>
          {listDecoded.map((vin) => (
            <li>{vin}</li>
          ))}
        </ul>
      ) : (
        "Search list is empty"
      )} */}
      {/* Список результатов расшифровки (значения Variable и Value переменных из массива Results, у которых Value заполнено) */}
      <h2>Отчёт о запрошенном номере</h2>
      <DecodeList />
    </div>
  );
}

export default App;

//  	/
// 
// /variables
// 	Список всех возможных переменных с описаниями
// /variables/{variableId}
// 	Описание конкретной переменной
