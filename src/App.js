import React, { Component } from 'react';

import mainURL from "./baseAPI/baseURL";
import Student from "./StudentData";

class App extends Component 
{
  state = { search: "", students: [] };

  componentDidMount() {
    mainURL.get()
      .then(res => {
        this.setState({ students: res.data.students});
        
      })
      .catch(err => console.log(err));
      console.log(mainURL);
  };


  renderRoster = () => this.state.students.map(student => <Student key={student.id} student={student} />);

  render() {
    return (
      
        
        <div className="page">
          {this.renderRoster()}
        </div>
      
    );
  }  
};

export default App;