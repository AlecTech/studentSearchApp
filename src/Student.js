import React, { Component } from "react";
import ExtraInfo from "./ExtraInfo";

class Student extends Component {
  state = {
    collapsed: true
  };

  handleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const { collapsed } = this.state;
    const { student } = this.props;
    const avgGrade = student.grades.reduce((total, grade) => total += parseInt(grade), 0) / student.grades.length;

    return (
      <div className="box">
        <div className="student" >

          <div className="studentPicture">
            <img src={student.pic} alt={`${student.firstName} ${student.lastName}`} />
          </div>
      
          <div className="studentDetails">
            <h2>{`${student.firstName} ${student.lastName}`}</h2>   
            <ul className="details">
              <li>Email: {student.email}</li>
              <li>Company: {student.company}</li>
              <li>Skill: {student.skill}</li>
              <li>Average: {avgGrade}%</li>
            </ul>
            {collapsed ? null : <ExtraInfo id={student.id} scores={student.grades} />}
          </div>

        </div>
        <button 
            className="studentMoreDetails"
            onClick={this.handleCollapse}
          >
            <i className={collapsed ? "fas fa-plus-circle" : "fas fa-minus-circle"}></i>
        </button>
      </div>
    );
  };
}

export default Student;