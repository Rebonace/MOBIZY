/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";

export default function VehicleDetails() {
  const [vehicle, setVehicle] = useState([]);
  const { vehicleId } = useParams();
  const config = {
    method: "get",
    url: `http://localhost:5001/api/vehicles/${vehicleId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      setVehicle(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      <VehicleCard
        brand={vehicle.brand}
        model={vehicle.model}
        description={vehicle.description}
        dateOfPurchase={vehicle.dateOfPurchase}
        fuel={vehicle.fuel}
        kilometers={vehicle.kilometers}
        location={vehicle.location}
        nbrSeats={vehicle.nbrSeats}
        gearbox={vehicle.gearbox}
        dailyPrice={vehicle.dailyPrice}
        isRamp={vehicle.isRamp}
        isSonar={vehicle.isSonar}
        isSphere={vehicle.isSphere}
      />
    </div>
  );
}
