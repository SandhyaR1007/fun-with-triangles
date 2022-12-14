import React, { useState } from "react";
import "../App.css";

const IsTriangle = () => {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [result, setResult] = useState("");
  const isTriangle = (e) => {
    e.preventDefault();
    console.log("called");
    if (angle1 == "" || angle2 == "" || angle3 == "") {
      setResult("Please provide all the three angles");
    } else {
      let sum = Number(angle1) + Number(angle2) + Number(angle3);
      console.log(sum);
      if (sum == 180) {
        setResult("Yayy!! the angles form a triangle");
      } else {
        setResult("Ahh!! the angles don't form a triangle");
      }
    }
  };

  return (
    <div className="container">
      <h2>Angles of Triangles</h2>
      <form onSubmit={(e) => isTriangle(e)} className="angles-container">
        <label className="angle-label">
          Angle 1
          <input
            className="angle"
            type="number"
            value={angle1}
            onChange={(e) => setAngle1(e.target.value)}
            min="1"
          />
        </label>
        <label className="angle-label">
          Angle 2
          <input
            className="angle"
            type="number"
            value={angle2}
            min="1"
            onChange={(e) => setAngle2(e.target.value)}
          />
        </label>
        <label className="angle-label">
          Angle 3
          <input
            className="angle"
            type="number"
            value={angle3}
            min="1"
            onChange={(e) => setAngle3(e.target.value)}
          />
        </label>

        <button className="btn-istriangle" type="submit">
          Is Triangle?
        </button>
      </form>

      <div className="result">{result}</div>
    </div>
  );
};

export default IsTriangle;
