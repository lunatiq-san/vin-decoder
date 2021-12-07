import { useContext, useEffect } from "react";
import { RequestContext } from "../../contexts/requestContext";
import { v4 as uuidv4 } from "uuid";

import styles from "./ListMostRecentDecoded.module.css";

export default function ListMostRecentDecoded() {
  const [lastRequests, setLastRequests] = useContext(RequestContext);

  useEffect(() => {
    const localLastRequests = localStorage.getItem("lastRequests");
    const parsedLastRequest = JSON.parse(localLastRequests);

    if (!parsedLastRequest) {
      return;
    }

    setLastRequests(parsedLastRequest);
  }, [setLastRequests]);

  useEffect(() => {
    localStorage.setItem("lastRequests", JSON.stringify(lastRequests));
  });

  return (
    <section className={styles.recentlyDecoding}>
      <h2 className={styles.title}>Recently decoding VIN numbers</h2>
      {lastRequests.length > 0 ? (
        <ul className={styles.list}>
          {lastRequests &&
            lastRequests.map((request) => (
              <li className={styles.item} key={uuidv4()}>
                {request}
              </li>
            ))}
        </ul>
      ) : (
        <p className={styles.text}>You don't have early requests</p>
      )}
    </section>
  );
}
