/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function VehicleCard({
  brand,
  model,
  description,
  dateOfPurchase,
  fuel,
  kilometers,
  location,
  nbrSeats,
  gearbox,
  dailyPrice,
  isRamp,
  isSonar,
  isSphere,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        wordWrap: "break-word",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em 0",
      }}
      className="vehicle-card-contianer"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "gray",
          width: "80%",
          wordWrap: "break-word",
          justifyContent: "center",
          borderRadius: "2%",
        }}
      >
        <img src="" alt="" />
        <h3>
          {brand}
          {model}
        </h3>
        <div className="vehicle-infos">
          <p>{description}</p>
          <p>{dateOfPurchase}</p>
          <p>{fuel}</p>
          <p>{kilometers}</p>
          <p>{location}</p>
          <p>{nbrSeats}</p>
          <p>{gearbox}</p>
          <p>{dailyPrice}</p>
          <p>{isRamp}</p>
          <p>{isSonar}</p>
          <p>{isSphere}</p>
        </div>
        <Link to="reserved">Reserved</Link>
      </div>
    </div>
  );
}

export default VehicleCard;
