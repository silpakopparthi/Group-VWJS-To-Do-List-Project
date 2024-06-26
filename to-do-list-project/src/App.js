import "./App.css";
//import Header from "./components/header";
import ToDoPage from "./components/ToDoPage";
// import Info from './components/Info';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      < ToDoPage />
      {/* <BrowserRouter>
        <Header />
        {/* <ToDoPage /> */}
      {/* <Routes>
          <Route path="/" element={<ToDoPage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter> } */}
    </div>
  );
}
export default App;
