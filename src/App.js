import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import BookPage from "./Pages/BookPage/BookPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { PopupProvider } from "./HelperFunctions/PopupContext";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";


function App() {
  return (
    <div className="App">
      <PopupProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </PopupProvider>
    </div>
  );
}

export default App;
