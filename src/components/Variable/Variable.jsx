import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Variable() {
  const { variableId } = useParams();
  const [variable, setVariable] = useState({});

  useEffect(() => {
    axios
      .get("vehicles/getvehiclevariablelist?format=json")
      .then(({ data }) => {
        const { Results } = data;

        const variableInfo = Results.find(
          (variable) => Number(variableId) === variable.ID
        );
        setVariable(variableInfo);
      })
      .catch((error) => console.log(error));
  }, [variableId]);

  return (
    <>
      Variable:
      <p>DataType: {variable.DataType}</p>
      <p>Description: {variable.Description}</p>
      <p>GroupName: {variable.GroupName}</p>
      <p>ID: {variable.ID}</p>
      <p>Name: {variable.Name}</p>
    </>
  );
}
