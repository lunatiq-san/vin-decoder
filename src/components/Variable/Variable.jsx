import { useParams } from "react-router";

export default function Variable() {
  const { variableId } = useParams();

  return <div>Variable: {variableId}</div>;
}
