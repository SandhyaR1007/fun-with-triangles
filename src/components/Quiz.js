import React, { useState } from "react";
import "../App.css";

const Quiz = () => {
  const correctAnswers = [
    "90",
    "right angled",
    "one right angle",
    "5,12,13",
    "Equilateral triangle",
    "55",
    "Hypotenuse",
    "a + b + c",
    "3",
    "45",
  ];
  const [userAnswers, setUserAnswers] = useState([]);
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = userAnswers.filter((i) => i !== undefined);
    if (arr.length !== correctAnswers.length) {
      setResult("Please answer all the questions");
    } else {
      calculateTotal(arr);
    }
  };
  const calculateTotal = (arr) => {
    let total = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] == arr[i]) {
        total += 1;
      }
    }
    setResult(`Your total score is ${total}/10`);
  };
  const fillUserAnswers = (val, index) => {
    let ans = [...userAnswers];
    ans[index] = val;
    setUserAnswers(ans);
  };
  return (
    <div className="container">
      <h2>Quiz on triangles</h2>
      <h4>For each correct answer you will get 1 point</h4>
      <form onSubmit={(e) => handleSubmit(e)} className="angles-container">
        {/* ques1------ */}
        <div className="questions">
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques1"
                type="radio"
                value="45"
                onChange={(e) => fillUserAnswers(e.target.value, 0)}
              />
              45°
            </label>
            <label>
              <input
                className="options"
                name="ques1"
                type="radio"
                value="90"
                onChange={(e) => fillUserAnswers(e.target.value, 0)}
              />
              90°
            </label>
            <label>
              <input
                className="options"
                name="ques1"
                type="radio"
                value="60"
                onChange={(e) => fillUserAnswers(e.target.value, 0)}
              />
              60°
            </label>
          </div>
        </div>
        {/* ques2------ */}
        <div className="questions">
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques2"
                type="radio"
                value="obtuse"
                onChange={(e) => fillUserAnswers(e.target.value, 1)}
              />
              obtuse
            </label>
            <label>
              <input
                className="options"
                name="ques2"
                type="radio"
                value="acute"
                onChange={(e) => fillUserAnswers(e.target.value, 1)}
              />
              acute
            </label>
            <label>
              <input
                className="options"
                name="ques2"
                type="radio"
                value="right angled"
                onChange={(e) => fillUserAnswers(e.target.value, 1)}
              />
              right angled
            </label>
          </div>
        </div>
        {/* ques3------ */}
        <div className="questions">
          <p>A triangle can have</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques3"
                type="radio"
                value="one right angle"
                onChange={(e) => fillUserAnswers(e.target.value, 2)}
              />
              one right angle
            </label>
            <label>
              <input
                className="options"
                name="ques3"
                type="radio"
                value="two right angles"
                onChange={(e) => fillUserAnswers(e.target.value, 2)}
              />
              two right angles
            </label>
          </div>
        </div>
        {/* ques4------ */}
        <div className="questions">
          <p>Which of the following can form a right angled triangle?</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques4"
                type="radio"
                value="5,12,13"
                onChange={(e) => fillUserAnswers(e.target.value, 3)}
              />
              5,12,13
            </label>
            <label>
              <input
                className="options"
                name="ques4"
                type="radio"
                value="4,5,6"
                onChange={(e) => fillUserAnswers(e.target.value, 3)}
              />
              4,5,6
            </label>
          </div>
        </div>
        {/* ques5------ */}
        <div className="questions">
          <p>Which of the following triangles are always similar?</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques5"
                type="radio"
                value="Equilateral triangle"
                onChange={(e) => fillUserAnswers(e.target.value, 4)}
              />
              Equilateral triangle
            </label>
            <label>
              <input
                className="options"
                name="ques5"
                type="radio"
                value="Isosceles triangle"
                onChange={(e) => fillUserAnswers(e.target.value, 4)}
              />
              Isosceles triangle
            </label>
          </div>
        </div>
        {/* ques6------ */}
        <div className="questions">
          <p>In triangle ABC, if AB=BC and ∠B = 70°, ∠A will be:</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques6"
                type="radio"
                value="100"
                onChange={(e) => fillUserAnswers(e.target.value, 5)}
              />
              100°
            </label>
            <label>
              <input
                className="options"
                name="ques6"
                type="radio"
                value="55"
                onChange={(e) => fillUserAnswers(e.target.value, 5)}
              />
              55°
            </label>
            <label>
              <input
                className="options"
                name="ques1"
                type="radio"
                value="60"
                onChange={(e) => fillUserAnswers(e.target.value, 0)}
              />
              60°
            </label>
          </div>
        </div>
        {/* ques7------ */}
        <div className="questions">
          <p>In a right triangle, the longest side is:</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques7"
                type="radio"
                value="Perpendicular"
                onChange={(e) => fillUserAnswers(e.target.value, 6)}
              />
              Perpendicular
            </label>
            <label>
              <input
                className="options"
                name="ques7"
                type="radio"
                value="Hypotenuse"
                onChange={(e) => fillUserAnswers(e.target.value, 6)}
              />
              Hypotenuse
            </label>
            <label>
              <input
                className="options"
                name="ques7"
                type="radio"
                value="Base"
                onChange={(e) => fillUserAnswers(e.target.value, 6)}
              />
              Base
            </label>
          </div>
        </div>
        {/* ques8------ */}
        <div className="questions">
          <p>The perimeter of scalene triangle with sides a, b, c is</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques8"
                type="radio"
                value="a + b + c"
                onChange={(e) => fillUserAnswers(e.target.value, 7)}
              />
              a + b + c
            </label>
            <label>
              <input
                className="options"
                name="ques8"
                type="radio"
                value="2a"
                onChange={(e) => fillUserAnswers(e.target.value, 7)}
              />
              2a
            </label>
            <label>
              <input
                className="options"
                name="ques1"
                type="radio"
                value="None of these"
                onChange={(e) => fillUserAnswers(e.target.value, 7)}
              />
              None of these
            </label>
          </div>
        </div>
        {/* ques9------ */}
        <div className="questions">
          <p>A scalene triangle has ___ lines of symmetry</p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques9"
                type="radio"
                value="3"
                onChange={(e) => fillUserAnswers(e.target.value, 8)}
              />
              3
            </label>
            <label>
              <input
                className="options"
                name="ques9"
                type="radio"
                value="no"
                onChange={(e) => fillUserAnswers(e.target.value, 8)}
              />
              no
            </label>
            <label>
              <input
                className="options"
                name="ques9"
                type="radio"
                value="15"
                onChange={(e) => fillUserAnswers(e.target.value, 8)}
              />
              15
            </label>
          </div>
        </div>
        {/* ques10------ */}
        <div className="questions">
          <p>
            There is a right triangle PQR where: angle Q = 90°; angle P = angle
            R. What is the measure of angles P and R?
          </p>
          <div className="options-div">
            <label>
              <input
                className="options"
                name="ques10"
                type="radio"
                value="85"
                onChange={(e) => fillUserAnswers(e.target.value, 9)}
              />
              85°
            </label>
            <label>
              <input
                className="options"
                name="ques10"
                type="radio"
                value="65"
                onChange={(e) => fillUserAnswers(e.target.value, 9)}
              />
              65°
            </label>
            <label>
              <input
                className="options"
                name="ques10"
                type="radio"
                value="45"
                onChange={(e) => fillUserAnswers(e.target.value, 9)}
              />
              45°
            </label>
          </div>
        </div>
        <button className="btn-istriangle" type="submit">
          Check Score
        </button>
      </form>

      <div className="result">{result}</div>
    </div>
  );
};

export default Quiz;
