import "./Home.css";
// import ProgressBar from "../ProgressBar/ProgressBar";
import * as Progress from "@radix-ui/react-progress";

const Home = (props) => {
  const { data } = props;
  console.log(data);

  return (
    // <div className="">
    //   <h1>Home</h1>
    //   {data && (
    //     <div>
    //       <p>Crop: {data.crop}</p>
    //       <p>N: {data.N}</p>
    //       <p>K: {data.K}</p>
    //       <p>P: {data.P}</p>
    //       <p>pH: {data.ph}</p>
    //       <p>Temperature: {data.temperature}</p>
    //       <p>Humidity: {data.humidity}</p>
    //       <p>Rainfall: {data.rainfall}</p>
    //       <p>Details: {data.details}</p>
    //       <img src={data.image_url} alt="Crop Image" />
    //     </div>
    //   )}
    // </div>
    <div className="user_stats">
      <div className="crop_card">
        <div className="crop_card__image">
          <img src={data.image_url} alt="Crop Image" />
        </div>
        <div className="crop_card__details">
          <h3>The best crop for current soil condition is</h3>
          <h1> {data.crop}</h1>
          <p>{data.details}</p>
        </div>
      </div>

      <div className="user_stats__details">
        <h3>Soil Condition</h3>
        <div className="user_stats__details__item">
          <span>🟢 Nitrogen : </span>
          {data.N} ppm
        </div>
        <div className="user_stats__details__item">
          <span>🟡 Potassium : </span> {data.K} ppm
        </div>
        <div className="user_stats__details__item">
          <span>🔵 Phosphorus : </span> {data.P} ppm
        </div>
        <div className="user_stats__details__item progress">
          <span>🧪 pH : </span> {data.ph}
        </div>
        <progress value={data.ph} max="14"></progress>
        <div className="user_stats__details__item">
          <span>☀️ Humidity : </span> {data.humidity} %
        </div>
        <div className="user_stats__details__item">
          <span>🌡️ Temperature : </span> {data.temperature} °C
        </div>
        <div className="user_stats__details__item">
          <span>🌧️ Rainfall : </span> {data.rainfall} mm
        </div>
      </div>
    </div>
  );
};

export default Home;
