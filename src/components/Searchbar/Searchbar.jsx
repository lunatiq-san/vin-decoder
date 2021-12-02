import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import { carsOperations } from "../../redux/cars";

import { RequestContext } from "../../contexts/requestContext";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [lastRequests, setLastRequests] = useContext(RequestContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const { value } = event.currentTarget;

    setSearchQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(carsOperations.getCarInfoByVin(searchQuery));
    setLastRequests((lastRequests) => [...lastRequests, searchQuery].slice(-5));
  };
  console.log("lastSearchQuery: ", lastRequests);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter VIN
        <button>Decode VIN</button>
        <input
          type="text"
          onChange={handleChange}
          value={searchQuery}
          placeholder="17-character VIN number"
        />
      </label>
    </form>
  );
}
