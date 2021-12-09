import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import ReactHtmlParser from "react-html-parser";
import { variablesOperations, variablesSelectors } from "../../redux/variables";

import styles from "./Variables.module.css";

export default function Variables() {
  const dispatch = useDispatch();
  const isLoading = useSelector(variablesSelectors.isLoading);
  const variablesList = useSelector(variablesSelectors.getVariables);

  useEffect(() => {
    dispatch(variablesOperations.getVariables());
  }, [dispatch]);

  return (
    <section className={styles.variables}>
      <h2 className={styles.title}>Variables</h2>

      {isLoading ? (
        <Loader type="Puff" color="#00adb5" height={50} width={50} />
      ) : (
        <ul className={styles.list}>
          {variablesList &&
            variablesList.map((variableInfo) => {
              const keys = Object.keys(variableInfo);
              const values = Object.values(variableInfo);
              const { ID } = variableInfo;

              return (
                <li className={styles.item} key={ID}>
                  <Link to={`${ID}`}>
                    {keys.map((key, index) => (
                      <div className={styles.text} key={key}>
                        <div className={styles.textKey}>{key}</div>
                        {/* converting HTML strings into React components */}
                        <div className={styles.textValue}>
                          {ReactHtmlParser(values[index])}
                        </div>
                      </div>
                    ))}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </section>
  );
}
