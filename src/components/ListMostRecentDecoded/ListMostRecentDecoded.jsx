import { useContext } from "react";
import { RequestContext } from "../../contexts/requestContext";
import { v4 as uuidv4 } from "uuid";

export default function ListMostRecentDecoded() {
  const [lastRequests, setLastRequests] = useContext(RequestContext);

  return (
    <ul>
      {lastRequests &&
        lastRequests.map((request) => <li key={uuidv4()}>{request}</li>)}
    </ul>
  );
}
