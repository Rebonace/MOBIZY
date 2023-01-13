import React, { useState } from "react";
import axios from "axios";
import VehicleCard from "../components/VehicleCard";
import { Link } from "react-router-dom";

function VehicleList() {
  const [vehicles, setVehicles] = useState();
  const config = {
    method: "get",
    url: "http://localhost:5001/api/vehicles",
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      setVehicles(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      {vehicles &&
        vehicles.map((elt) => (
          <div>
            <VehicleCard
              brand={elt.brand}
              model={elt.model}
              description={elt.description}
              dateOfPurchase={elt.dateOfPurchase}
              fuel={elt.fuel}
              kilometers={elt.kilometers}
              location={elt.location}
              nbrSeats={elt.nbrSeats}
              gearbox={elt.gearbox}
              dailyPrice={elt.dailyPrice}
              isRamp={elt.isRamp}
              isSonar={elt.isSonar}
              isSphere={elt.isSphere}
            />
            <Link
              to={`/vehicles/${elt.id}`}
              style={{ color: "black", fontSize: "1rem" }}
            >
              Link
            </Link>
          </div>
        ))}
    </div>
  );
}

export default VehicleList;
