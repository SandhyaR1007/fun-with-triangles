import React, { useState } from "react";
import "../App.css";
import { questions } from "../questions";
import Question from "./Question";

const Quiz = () => {
  const correctAnswers = [
    "90°",
    "obtuse",
    "one right angle",
    "5,12,13",
    "Equilateral triangle",
    "40°",
    "Hypotenuse",
    "a + b + c",
    "3",
    "45°",
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
        {questions.map((item, index) => (
          <Question
            key={index}
            id={item.id}
            ques={item.ques}
            options={item.options}
            fillUserAnswers={fillUserAnswers}
          />
        ))}

        <button className="btn-istriangle" type="submit">
          Check Score
        </button>
      </form>

      <div className="result">{result}</div>
    </div>
  );
};

export default Quiz;
