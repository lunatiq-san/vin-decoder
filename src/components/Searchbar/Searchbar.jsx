import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import { carsOperations } from "../../redux/cars";

import { RequestContext } from "../../contexts/requestContext";
import styles from "./Searchbar.module.css";

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

    if (searchQuery.trim()) {
      dispatch(carsOperations.getCarInfoByVin(searchQuery));
      setLastRequests([...lastRequests, searchQuery].slice(-5));
    }
  };

  return (
    <section className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <p className={styles.title}>Enter VIN Number</p>
          <input
            className={styles.input}
            type="text"
            autoFocus
            onChange={handleChange}
            value={searchQuery}
            placeholder="17-character VIN number"
            pattern="[a-zA-Z0-9]{17}"
            title="The given number is incorrect"
          />
          <button className={styles.btn}>Decode</button>
        </label>
      </form>
    </section>
  );
}
