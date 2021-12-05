import { useState } from "react";
import { RequestContext } from "../contexts/requestContext";
import DecodeList from "../components/DecodeList";
import Searchbar from "../components/Searchbar";
import ListMostRecentDecoded from "../components/ListMostRecentDecoded";

export default function HomePage() {
  const [lastRequests, setLastRequests] = useState([]);

  return (
    <div className="App">
      <RequestContext.Provider value={[lastRequests, setLastRequests]}>
        <h2>Free vehicle history check</h2>
        <Searchbar />

        <h2>Список последних декодированных номеров VIN</h2>
        <ListMostRecentDecoded />
      </RequestContext.Provider>

      <h2>Отчёт о запрошенном номере</h2>
      <DecodeList />
    </div>
  );
}
