import { useSelector } from "react-redux";
import { carsSelectors } from "../../redux/cars";
import { v4 as uuidv4 } from "uuid";

export default function DecodeList() {
  const car = useSelector(carsSelectors.getCar);

  return (
    <>
      {car && (
        <ul>
          {car.map(({ Value, Variable, VariableId }) => {
            const isValue = Value && Value !== "Not Applicable";

            return isValue && <li key={uuidv4()}>{`${Variable}: ${Value}`}</li>;
          })}
        </ul>
      )}
    </>
  );
}
