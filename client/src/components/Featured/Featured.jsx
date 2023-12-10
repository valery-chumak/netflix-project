import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import "./Featured.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmNiZThmNTM4M2Q2OWU1MDUyZjY2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjIzMDYxNiwiZXhwIjoxNzAyNjYyNjE2fQ.Hisl7wJZjGroh0hufUKT9zZ0iJ21PSjqLQ_HmACb0sQ",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="movie banner" />
      <div className="info">
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to="/watch" state={{ movie: content }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <Link to="/watch" state={{ movie: content }}>
            <button className="more">
              <InfoOutlined />
              <span>More</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
