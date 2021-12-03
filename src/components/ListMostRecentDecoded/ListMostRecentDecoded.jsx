import { useContext, useEffect } from "react";
import { RequestContext } from "../../contexts/requestContext";
import { v4 as uuidv4 } from "uuid";

export default function ListMostRecentDecoded() {
  const [lastRequests, setLastRequests] = useContext(RequestContext);

  useEffect(() => {
    const localLastRequests = localStorage.getItem("lastRequests");
    const parsedLastRequest = JSON.parse(localLastRequests);

    if (!parsedLastRequest) {
      return;
    }

    setLastRequests(parsedLastRequest);
  }, []);

  useEffect(() => {
    localStorage.setItem("lastRequests", JSON.stringify(lastRequests));
  });

  return (
    <ul>
      {lastRequests &&
        lastRequests.map((request) => <li key={uuidv4()}>{request}</li>)}
    </ul>
  );
}
