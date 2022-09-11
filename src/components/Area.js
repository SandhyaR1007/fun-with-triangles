import React, { useState } from "react";
import "../App.css";

const Area = () => {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (side1 !== "" && side2 !== "" && side3 !== "") {
      let s1 = Number(side1);
      let s2 = Number(side2);
      let s3 = Number(side3);
      calculateArea(s1, s2, s3);
    } else {
      setResult("Please enter all the sides");
    }
  };
  const calculateArea = (a, b, c) => {
    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    if (!isNaN(area)) {
      setResult(`Area of Triangle is ${area.toFixed(4)} sq.unit`);
    } else {
      setResult(`Please enter valid sides`);
    }

    return;
  };

  return (
    <div className="container">
      <h2>Calculate Area of a triangle</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="angles-container">
        <label className="angle-label">
          Enter first side of the triangle (a)
          <input
            className="angle"
            type="number"
            value={side1}
            onChange={(e) => setSide1(e.target.value)}
            min="0"
          />
        </label>
        <label className="angle-label">
          Enter second side of the triangle (b)
          <input
            className="angle"
            type="number"
            value={side2}
            min="0"
            onChange={(e) => setSide2(e.target.value)}
          />
        </label>
        <label className="angle-label">
          Enter third side of the triangle (c)
          <input
            className="angle"
            type="number"
            value={side3}
            min="0"
            onChange={(e) => setSide3(e.target.value)}
          />
        </label>

        <button className="btn-istriangle" type="submit">
          Calculate
        </button>
      </form>

      <div className="result">{result}</div>
    </div>
  );
};

export default Area;
