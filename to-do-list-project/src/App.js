import "./App.css";
import Header from "./components/header";
import ToDoPage from "./components/ToDoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoPage />} />
          {/* <Route path="/info" element={<InfoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
