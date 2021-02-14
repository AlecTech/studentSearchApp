import React, { Component } from "react";

class SearchField extends Component {
  handleSubmit = e => e.preventDefault();

  render() {
    return (
      <form className="searchField" action="submit" onSubmit={this.handleSubmit}>
        <input  
          id="search"
          className="searchInput"
          type="text"
          placeholder="Search by name"
          value={this.props.search}
          onChange={this.props.handleSearchEvent}
        />
        <label        
          htmlFor="search"
          className="searchLabel"
        ></label>
      </form>
    )
  };
}

export default SearchField;