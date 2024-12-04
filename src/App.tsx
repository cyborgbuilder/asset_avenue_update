import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  Assets,
  Market,
  Resale,
  House,
  Stake,
  Contacts,
  DAO,
  PreSale,
} from "@/pages";
import "@/css/styles.css";
import { ScrollToTop } from "./components";

const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset" element={<Assets />} />
          <Route path="/market" element={<Market />} />
          <Route path="/resale" element={<Resale />} />
          <Route path="/house" element={<House />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/dao" element={<DAO />} />
          <Route path="/seed-sale" element={<PreSale />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
