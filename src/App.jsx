import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BrowsePage from "./pages/browse";
import AddJobPage from "./pages/add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse-jobs" element={<BrowsePage />} />
      <Route path="/add-jobs" element={<AddJobPage />} />
    </Routes>
  );
}

export default App;
