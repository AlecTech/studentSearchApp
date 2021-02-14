import React from "react";

export default ({ student }) => {
  console.log(student);

  const avgGrade = student.grades.reduce((total, grade) => total += parseInt(grade), 0) / student.grades.length;

  return (
    <div className="student">

      <div className="studentPicture">
        <img src={student.pic} alt={`${student.firstName} ${student.lastName}`} />
      </div>
     
      <div className="studentDetails">
        <h2>{`${student.firstName} ${student.lastName}`}</h2>
        <ul className="student__details">
          <li>Email: {student.email}</li>
          <li>Company: {student.company}</li>
          <li>Skill: {student.skill}</li>
          <li>Average: {avgGrade}</li>
        </ul>
      </div>

    </div>
  )
}