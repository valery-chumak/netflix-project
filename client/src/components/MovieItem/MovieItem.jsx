import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./MovieItem.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MovieItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/${item}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmNiZThmNTM4M2Q2OWU1MDUyZjY2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjIzMDYxNiwiZXhwIjoxNzAyNjYyNjE2fQ.Hisl7wJZjGroh0hufUKT9zZ0iJ21PSjqLQ_HmACb0sQ",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="list-item"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="movie poster" />
        {isHovered && (
          <>
            <video src={movie.trailer} loop muted playsInline autoPlay />

            <div className="item-info">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="item-info__top">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default MovieItem;
