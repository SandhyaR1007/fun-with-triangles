import React, { useState } from "react";

const Hypotenuse = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");

  const [result, setResult] = useState("");
  const calculateHypotenuse = (e) => {
    e.preventDefault();

    if (base !== "" && height !== "") {
      let baseSquare = Number(base) * Number(base);
      let heightSquare = Number(height) * Number(height);

      let hypotenuse = Math.sqrt(baseSquare + heightSquare);

      setResult(`The length of hypotenuse is ${hypotenuse}`);
    } else {
      setResult(`Please fill both base and height`);
    }
  };

  return (
    <div className="container">
      <h2>Calculate Hypotenuse of a triangle</h2>
      <form
        onSubmit={(e) => calculateHypotenuse(e)}
        className="angles-container"
      >
        <label className="angle-label">
          Enter base value (b) =
          <input
            className="angle"
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            min="0"
          />
        </label>
        <label className="angle-label">
          Enter height value (h) =
          <input
            className="angle"
            type="number"
            value={height}
            min="0"
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <button className="btn-istriangle" type="submit">
          Calculate Hypotenuse?
        </button>
      </form>
      <div className="formula">
        <h2>Hypotenuse Formula</h2>
        <h4>√(base² + height²)</h4>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Hypotenuse;
