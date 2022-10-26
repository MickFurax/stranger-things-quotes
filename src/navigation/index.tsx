import { Route, Routes } from "react-router-dom";
import Quotes from "../pages/Quotes";
import Start from "../pages/Start";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/playing" element={<Quotes />} />
    </Routes>
  );
};

export default Navigation;
