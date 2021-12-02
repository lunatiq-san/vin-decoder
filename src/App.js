// import DecodeList from "./components/DecodeList";
// import Searchbar from "./components/Searchbar";
// import ListMostRecentDecoded from "./components/ListMostRecentDecoded";
// import "./App.css";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsOperations } from "./components/redux/cars";
import { carsSelectors } from "./components/redux/cars";

axios.defaults.baseURL = "https://vpic.nhtsa.dot.gov/api/";

function App() {
  const dispatch = useDispatch();
  const car = useSelector(carsSelectors.getCar);
  const [searchQuery, setSearchQuery] = useState();

  const handleChange = (event) => {
    const { value } = event.currentTarget;

    setSearchQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(carsOperations.getCarInfoByVin(searchQuery));
  };

  console.log("car: ", car);
  console.log("searchQuery: ", searchQuery);

  return (
    <div className="App">
      {/* Форма ввода VIN-кода */}
      {/* <Searchbar /> */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter VIN
          <button>Decode VIN</button>
          <input type="text" onChange={handleChange} />
        </label>
      </form>
      {car && (
        <ul>
          {car.map((vehicle) => {
            const isValue = vehicle.Value && vehicle.Value !== "Not Applicable";

            return (
              isValue && (
                <li key={vehicle.VariableId}>
                  {`${vehicle.Variable}: ${vehicle.Value}`}
                </li>
              )
            );
          })}
        </ul>
        // <ul>
        //   {car.map((vehicle) => {
        //     const list = "link";

        //     return (
        //       <li key={vehicle.VariableId}>
        //         {vehicle.Value &&
        //           vehicle.Value !== "Not Applicable" &&
        //           `${vehicle.Variable}: ${vehicle.Value}`}
        //       </li>
        //     );
        //   })}
        // </ul>
      )}
      {/* Список из 5 последних расшифрованных кодов */}
      {/* {vin.length > 0 ? <ListMostRecentDecoded /> : "Search list is empty"} */}
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
      {/* <DecodeList /> */}
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
