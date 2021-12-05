import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router";

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
    <>
      <div>Variables</div>
      <ul>
        {variablesList &&
          variablesList.map(
            ({ DataType, Description, GroupName, ID, Name }) => (
              <Fragment key={ID}>
                <li>
                  <p>DataType: {DataType}</p>
                  <p>Description: {Description}</p>
                  <p>GroupName: {GroupName}</p>
                  <p>ID: {ID}</p>
                  <p>Name: {Name}</p>
                </li>
                <Outlet />
              </Fragment>
            )
          )}
      </ul>
    </>
  );
}
