import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

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
        <>
          Variable:
          <p>DataType: {DataType}</p>
          <p>Description: {Description}</p>
          <p>GroupName: {GroupName}</p>
          <p>ID: {ID}</p>
          <p>Name: {Name}</p>
        </>
      ) : (
        <p>Variable with ID: {variableId} not found</p>
      )}
    </>
  );
}
