import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { AuthContext } from "./context/authContext/authContext";

function App() {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!user && window.location.pathname !== "/login") {
      return navigate("/register");
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/movies" element={<Homepage type="movie" />} />
      <Route path="/series" element={<Homepage type="series" />} />
      <Route path="/watch" element={<MoviePage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default App;
