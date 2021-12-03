import { useSelector } from "react-redux";
import { carsSelectors } from "../../redux/cars";

export default function DecodeList() {
  const carInfo = useSelector(carsSelectors.getCarInfo);

  return (
    <>
      {carInfo && (
        <ul>
          {carInfo.map(({ Value, Variable, VariableId }) => {
            const isValue = Value && Value !== "Not Applicable";

            return (
              isValue && <li key={VariableId}>{`${Variable}: ${Value}`}</li>
            );
          })}
        </ul>
      )}
    </>
  );
}
