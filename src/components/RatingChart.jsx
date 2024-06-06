import { useState } from "react";
import "../styles.scss";
import { HEIGHT, WIDTH } from "../constants";

function RatingChart() {
  const [ratings, setRatings] = useState([35, 50, 40, 22, 10]);

  const regenerateRatings = () => {
    const newRatings = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 51)
    );
    setRatings(newRatings);
  };

  return (
    <div className="rating-chart">
      <div className="heading">Rating Breakdown</div>
      <div className="chart-wrapper">
        <div className="y-axis-text">No. of ratings</div>

        <div className="graph-wrapper">
          <div
            className="y-axis-label-wrapper"
            style={{
              height: HEIGHT + "px",
            }}
          >
            {Array.from({ length: 5 }, (_, i) => i).map((i) => (
              <div style={{ margin: "0 10px" }}>{(i + 1) * 10}</div>
            ))}
          </div>
          <div>
            <div
              className="chart"
              style={{ height: HEIGHT + "px", width: WIDTH + "px" }}
            >
              {ratings.map((rating, index) => (
                <div
                  className="exact-rating"
                  style={{
                    height: HEIGHT + 40 + "px",
                  }}
                >
                  <div className="exact-rating-text">{rating}</div>
                  <div
                    key={index}
                    className="bar"
                    style={{ height: `${rating * (HEIGHT / 50)}px` }}
                  ></div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", width: WIDTH + "px" }}>
              {Array.from({ length: 5 }, (_, i) => i).map((i) => (
                <div style={{ margin: "10px", width: HEIGHT / 5 + "px" }}>
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button onClick={regenerateRatings}>Regenerate</button>
    </div>
  );
}

export default RatingChart;
