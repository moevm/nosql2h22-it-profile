import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home";
import Layout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
