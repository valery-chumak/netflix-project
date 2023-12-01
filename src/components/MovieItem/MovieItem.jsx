import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./MovieItem.scss";
import { useState } from "react";

const MovieItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt="movie poster"
      />
      {isHovered && (
        <>
          <video src={trailer} loop muted playsInline autoPlay />

          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item-info__top">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2000</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              nostrum in! Quisquam, nesciunt? Est quod, expedita nihil hic
              asperiores sapiente, modi omnis consequatur molestias vitae
              tempore sint nesciunt beatae facilis rem ipsum suscipit labore
              provident, praesentium fugiat optio cumque deleniti
              necessitatibus. Eius sequi vel debitis commodi. Similique
              necessitatibus suscipit tempora error architecto. Officia, amet
              illo voluptas deleniti eum totam exercitationem harum, voluptates
              nemo molestiae facere eaque ducimus illum labore voluptate saepe
              iste ipsa repellat ea eligendi sapiente? Fugit perferendis harum
              praesentium ullam, doloremque, labore vitae id dolore totam eaque
              natus corporis quaerat. Consequatur iusto quaerat ad obcaecati
              accusamus, eveniet deserunt.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieItem;
