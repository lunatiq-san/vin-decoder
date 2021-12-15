import { useState } from "react";
import { useSelector } from "react-redux";
import { RequestContext } from "../../contexts/requestContext";
import DecodeList from "../../components/DecodeList";
import Searchbar from "../../components/Searchbar";
import ListMostRecentDecoded from "../../components/ListMostRecentDecoded";
import { carsSelectors } from "../../redux/cars";
import styles from "./HomePage.module.css";
import Loader from "react-loader-spinner";

export default function HomePage() {
  const [lastRequests, setLastRequests] = useState([]);
  const carInfo = useSelector(carsSelectors.getCarInfo);
  const isLoading = useSelector(carsSelectors.isLoading);

  return (
    <main className="HomePage">
      <RequestContext.Provider value={[lastRequests, setLastRequests]}>
        <h1 className={styles.title}>Free vehicle history check</h1>
        <Searchbar />
        <ListMostRecentDecoded />
      </RequestContext.Provider>

      {isLoading && (
        <Loader
          type="Puff"
          color="#00adb5"
          height={50}
          width={50}
          className={styles.loader}
        />
      )}

      {carInfo ? <DecodeList /> : null}
    </main>
  );
}
