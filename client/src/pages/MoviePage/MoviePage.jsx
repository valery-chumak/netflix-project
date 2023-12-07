import { ArrowBackOutlined } from "@mui/icons-material";
import "./MoviePage.scss";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const MoviePage = () => {
  let { state } = useLocation();
  const { title, desc, year, genre, limit, img, imgSm, isSeries, trailer } =
    state.movie;

  return (
    <>
      {" "}
      <section className="movie-section">
        <div className="banner-wrapper">
          <img className="banner" src={img} alt={title} />
        </div>

        <Link to="/" className="link back">
          <ArrowBackOutlined />
          Home
        </Link>

        <div className="movie-wrapper">
          <div className="left-container">
            <img className="movie-image" src={imgSm} alt={title} />
          </div>
          <div className="right-container">
            <span className="type">
              {isSeries === true ? "Series" : "Movie"}
            </span>
            <h1 className="title">
              {title}
              <span className="year">({year})</span>
            </h1>
            <p className="info">SYNOPSIS</p>
            <p className="desc">{desc}</p>
            <p className="genre">
              <span>Genre: </span>
              {genre}
            </p>
            <p className="limit">
              <span>Limit: </span>
              {limit} +
            </p>
            <p className="text">
              The movie is unavailable for free watching. Watch trailer of{" "}
              {title} ({year})
            </p>
          </div>
        </div>

        <iframe
          className="video"
          width="560"
          height="315"
          src={trailer}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default MoviePage;
