import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./MovieList.scss";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = () => {
  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined />
        <div className="movies-container">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>

        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default MovieList;
