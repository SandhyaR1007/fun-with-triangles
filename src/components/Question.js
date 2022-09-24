import React from "react";

const Question = ({ id, ques, options, fillUserAnswers }) => {
  return (
    <div className="questions">
      <p>{ques}</p>
      <div className="options-div">
        {options.map((i, index) => (
          <label key={index}>
            <input
              className="options"
              name={`ques${id}`}
              type="radio"
              value={i}
              onChange={(e) => fillUserAnswers(e.target.value, id)}
            />
            {i}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
