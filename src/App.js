import { Route, Routes } from "react-router";

import Variables from "./components/Variables";
import Variable from "./components/Variable";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/variables" element={<Variables />} />
      <Route path="/variables/:variableId" element={<Variable />} />
    </Routes>
  );
}

export default App;

//  	/
// 
// /variables
// 	Список всех возможных переменных с описаниями
// /variables/{variableId}
// 	Описание конкретной переменной
