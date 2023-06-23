import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleMoive from "./pages/SingleMoive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<SingleMoive />} />
      </Routes>
    </div>);
}

export default App;
