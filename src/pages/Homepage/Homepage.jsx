import Featured from "../../components/Featured/Featured";
import MovieList from "../../components/MovieList/MovieList";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <MovieList />
    </div>
  );
};

export default Homepage;
