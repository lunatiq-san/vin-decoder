import { useState } from "react";
import { useSelector } from "react-redux";
import { RequestContext } from "../contexts/requestContext";
import DecodeList from "../components/DecodeList";
import Searchbar from "../components/Searchbar";
import ListMostRecentDecoded from "../components/ListMostRecentDecoded";
import { carsSelectors } from "../redux/cars";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [lastRequests, setLastRequests] = useState([]);
  const carInfo = useSelector(carsSelectors.getCarInfo);

  return (
    <main className="HomePage">
      <RequestContext.Provider value={[lastRequests, setLastRequests]}>
        <h1 className={styles.title}>Free vehicle history check</h1>
        <Searchbar />
        <ListMostRecentDecoded />
      </RequestContext.Provider>
      {carInfo ? <DecodeList /> : null}
    </main>
  );
}
