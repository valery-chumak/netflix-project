import { ArrowBackOutlined } from "@mui/icons-material";
import "./MoviePage.scss";

const MoviePage = () => {
  return (
    <section className="movie-section">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        className="video"
        muted
        autoPlay
        controls
      ></video>
    </section>
  );
};

export default MoviePage;
