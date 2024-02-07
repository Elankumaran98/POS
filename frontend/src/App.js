import { Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage/>} />
      </Routes>
    </div>
  );
}

export default App;
