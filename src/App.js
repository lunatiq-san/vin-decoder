import { Route, Routes } from "react-router";
import { ToastContainer, Slide } from "react-toastify";

import Variables from "./components/Variables";
import Variable from "./components/Variable";
import HomePage from "./pages/HomePage";
import Container from "./components/Container";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // <Container>
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="variables" element={<Variables />} />
        <Route path="variables/:variableId" element={<Variable />} />
      </Routes>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
    // </Container>
  );
}

export default App;
