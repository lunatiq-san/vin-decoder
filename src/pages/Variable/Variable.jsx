import { useEffect } from "react";
import { useParams } from "react-router";

import styles from "./Variable.module.css";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { variableOperations, variableSelectors } from "../../redux/variable";

export default function Variable() {
  const { variableId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(variableSelectors.isLoading);
  const variable = useSelector(variableSelectors.getVariableById);

  useEffect(() => {
    dispatch(variableOperations.fetchVariableById(variableId));
  }, [dispatch, variableId]);

  const keys = Object.keys(variable);
  const values = Object.values(variable);

  return (
    <>
      {isLoading ? (
        <Loader
          type="Puff"
          color="#00adb5"
          height={50}
          width={50}
          className={styles.loader}
        />
      ) : (
        <section className={styles.variable}>
          <h2 className={styles.title}>Variable</h2>

          {variable ? (
            <ul className={styles.list}>
              {keys.map((key, index) => (
                <li className={styles.item} key={key}>
                  <div className={styles.itemKey}>{key}</div>
                  {/* converting HTML strings into React components */}
                  <div className={styles.itemValue}>
                    {ReactHtmlParser(values[index])}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.notFound}>
              Variable with ID: {variableId} not found
            </p>
          )}
        </section>
      )}
    </>
  );
}
