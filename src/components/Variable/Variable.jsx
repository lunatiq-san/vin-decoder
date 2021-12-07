import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import ReactHtmlParser from "react-html-parser";

import styles from "./Variable.module.css";

export default function Variable() {
  const { variableId } = useParams();
  const [variable, setVariable] = useState({});
  const { DataType, Description, GroupName, ID, Name } = variable;

  useEffect(() => {
    axios
      .get("vehicles/getvehiclevariablelist?format=json")
      .then(({ data }) => {
        const { Results } = data;
        const variableInfo = Results.find(
          ({ ID }) => Number(variableId) === ID
        );

        if (variableInfo === undefined) {
          toast.error("No such id exists");
        }

        setVariable(variableInfo);
      })
      .catch((error) => console.log(error));
  }, [variableId]);

  return (
    <>
      {variable !== undefined ? (
        <section className={styles.variable}>
          <h2 className={styles.title}>Variable</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.itemKey}>DataType:</span>
              <span className={styles.itemValue}>{DataType}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemKey}>Description:</span>
              <span className={styles.description}>
                {ReactHtmlParser(Description)}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemKey}>GroupName:</span>
              <span className={styles.itemValue}>{GroupName}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemKey}>ID:</span>
              <span className={styles.itemValue}>{ID}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemKey}>Name:</span>
              <span className={styles.itemValue}>{Name}</span>
            </li>
          </ul>
        </section>
      ) : (
        <p>Variable with ID: {variableId} not found</p>
      )}
    </>
  );
}
