import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
  const [info, setInfo] = useState({ isRamp: 0, isSonar: 0, isSphere: 0 });
  // eslint-disable-next-line no-unused-vars
  const [vehicles, setVehicles] = useState({});

  const handleChange = (name) => {
    if (info[name] === 0) setInfo({ ...info, [name]: 1 });
    if (info[name] === 1) setInfo({ ...info, [name]: 0 });
  };

  const handleTyping = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicles/filter", info)
      .then((res) => setVehicles(res.data));
  }, [info]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={info.isRamp}
          onChange={() => handleChange("isRamp")}
        />
        You need a ramp
      </label>
      <label>
        <input
          type="checkbox"
          checked={info.isSonar}
          onChange={() => handleChange("isSonar")}
        />
        You need a sonar
      </label>
      <label>
        <input
          type="checkbox"
          checked={info.isSphere}
          onChange={() => handleChange("isSphere")}
        />
        You need a sphere
      </label>
      <div>
        <input
          onChange={handleTyping}
          type="text"
          name="location"
          key="location"
          placeholder="Location"
        />
      </div>
      <div>
        <input
          onChange={handleTyping}
          type="number"
          name="dailyPrice"
          key="dailyPrice"
          placeholder="Daily Price"
        />
      </div>
    </div>
  );
}

export default Search;
