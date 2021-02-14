import React, { Component } from 'react';

import mainURL from "./baseAPI/baseURL";
import Student from "./Student";

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


  renderData = () => this.state.students.map(student => <Student key={student.id} student={student} />);
  handleSubmit = e => e.preventDefault();
  render() {
    return (
      
      <div className="container">
        <div className="page">

          <form className="searchField" action="submit" onSubmit={this.handleSubmit}>
            <input
              id="searchInput"
              className="searchFieldInput"
              type="text"
              placeholder="Search by name"
            />
            <label htmlFor="searchFieldInput" className="searchFieldLable" > </label>
          </form>


          {this.renderData()}
        </div>
      </div>  
    );
  };  
};

export default App;