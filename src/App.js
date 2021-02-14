import React, { Component } from 'react';
import mainURL from "./baseAPI/baseURL";
import Student from "./Student";
import SearchField from "./SearchField";

class App extends Component 
{
  //initialize state
  state = { search: "", students: [] };

  handleSearchEvent = e => this.setState({ [e.target.id]: e.target.value });
  // API call via axios
  componentDidMount() {
    mainURL.get()
      .then(res => {
        this.setState({ students: res.data.students});    
      })
      .catch(err => console.log(err));
      console.log(mainURL);
  };

  renderData = () => {
    const { search, students } = this.state;
    // === value and type are the same
    // conditional rendering if search is empty return everything, but if not then filter
    if (search === "") {
      return students.map(student => <Student key={student.id} student={student} />);
    }
    return students
      .filter(student => {
        const name = `${student.firstName} ${student.lastName}`;
        // RegExp for case insensitive search
        const searchRE = new RegExp(search, "i");
        return name.match(searchRE);
      })
      .map(student => <Student key={student.id} student={student} />);
  }
 
  render() {
    return (
      
      <div className="container">
        <div className="page">

          <SearchField search={this.state.search} handleSearchEvent={this.handleSearchEvent}  /> 

          {this.renderData()}
        </div>
      </div>  
    );
  };  
};

export default App;