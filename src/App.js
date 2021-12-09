import { Route, Routes } from "react-router";

import Variables from "./pages/Variables";
import Variable from "./pages/Variable";
import HomePage from "./pages/HomePage/HomePage";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/variables/:variableId" element={<Variable />} />
      </Routes>
    </Container>
  );
}

export default App;
