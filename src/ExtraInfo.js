import React from "react";

const ExtraInfo = ({ id, scores }) => {
  const renderGrades = () => scores.map((score, scoreID) => {
    const grades = scoreID + 1;
    return (
      <li key={`${id}-${grades}`}>
        <span className="studentGrades">Test {grades}:</span>
        <span>{score}%</span>
      </li>
    );
  });

  return (
    <ul className="studentScore">
      {renderGrades()}
    </ul>
  );
};

export default ExtraInfo;