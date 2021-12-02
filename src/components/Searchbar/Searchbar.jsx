import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import axios from "axios";

axios.defaults.baseURL = "https://vpic.nhtsa.dot.gov/api/";

export default function Searchbar() {
  const dispatch = useDispatch();
  const vin = useSelector((state) => state.vin);
  const listDecoded = useSelector((state) => state.listDecoded);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.currentTarget);
  };

  const addLastDecodeVin = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter VIN
        <button type="submit">Decode VIN</button>
        <input />
      </label>
    </form>
  );
}
