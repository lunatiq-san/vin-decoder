import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

import styles from "./Variables.module.css";

export default function Variables() {
  const [variablesList, setVariablesList] = useState([]);

  useEffect(() => {
    axios
      .get("vehicles/getvehiclevariablelist?format=json")
      .then(({ data }) => {
        const { Results } = data;
        setVariablesList(Results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={styles.variables}>
      <h2 className={styles.title}>Variables</h2>
      <ul className={styles.list}>
        {variablesList &&
          variablesList.map(
            ({ DataType, Description, GroupName, ID, Name }) => (
              <li className={styles.item} key={ID}>
                <p className={styles.text}>
                  <span className={styles.textKey}>DataType:</span>
                  <span>{DataType}</span>
                </p>
                <p className={styles.text}>
                  <span className={styles.textKey}>Description:</span>
                  <p className={styles.textValue}>
                    {ReactHtmlParser(Description)}
                  </p>
                </p>
                <p className={styles.text}>
                  <span className={styles.textKey}>GroupName:</span>
                  <span>{GroupName}</span>
                </p>
                <p className={styles.text}>
                  <span className={styles.textKey}>ID:</span>
                  <span>{ID}</span>
                </p>
                <p className={styles.text}>
                  <span className={styles.textKey}>Name:</span>
                  <span>{Name}</span>
                </p>
              </li>
            )
          )}
      </ul>
    </section>
  );
}
