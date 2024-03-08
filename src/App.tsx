import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FormPage from "./Pages/FormPage/FormPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
