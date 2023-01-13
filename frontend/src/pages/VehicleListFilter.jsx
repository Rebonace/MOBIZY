import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";

function VehicleListFilter() {
  const data = window.localStorage.getItem("filter");
  const dataJSON = JSON.parse(data);
  useEffect(() => console.log(dataJSON), []);

  return (
    <div className="vehicle-list-filter">
      {dataJSON ? (
        dataJSON.map((elt) => (
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
        ))
      ) : (
        <div>
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            No vehicles found
          </h1>
          <p
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Link
              to="/vehicles"
              style={{
                width: "100%",
                textAlign: "center",
                color: "black",
                fontSize: "1rem",
              }}
            >
              See All vehicles
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default VehicleListFilter;
