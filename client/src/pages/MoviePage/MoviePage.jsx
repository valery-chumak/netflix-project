import { ArrowBackOutlined } from "@mui/icons-material";
import "./MoviePage.scss";
import { useLocation } from "react-router-dom";

const MoviePage = () => {
  let { state } = useLocation();

  console.log(state.movie);
  return (
    <section className="movie-section">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src={state.movie.video}
        className="video"
        muted
        autoPlay
        controls
      ></video>
    </section>
  );
};

export default MoviePage;
