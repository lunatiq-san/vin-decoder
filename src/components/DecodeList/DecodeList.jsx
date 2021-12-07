import { useSelector } from "react-redux";
import { carsSelectors } from "../../redux/cars";

import styles from "./DecodeList.module.css";

export default function DecodeList() {
  const carInfo = useSelector(carsSelectors.getCarInfo);

  return (
    <section className={styles.decodeList}>
      <h2 className={styles.title}>Report on the requested number</h2>
      <ul className={styles.list}>
        {carInfo.map(({ Value, Variable, VariableId }) => {
          const isValue = Value && Value !== "Not Applicable";

          return (
            isValue && (
              <li className={styles.item} key={VariableId}>
                <span className={styles.variable}>{`${Variable}: `} </span>
                <span className={styles.value}>{`${Value}`}</span>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}
