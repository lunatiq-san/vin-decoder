import { useSelector } from "react-redux";

export default function ListMostRecentDecoded() {
  const listDecoded = useSelector((state) => state.listDecoded);

  return (
    <ul>
      {listDecoded.map((vin) => (
        <li>{vin}</li>
      ))}
    </ul>
  );
}
