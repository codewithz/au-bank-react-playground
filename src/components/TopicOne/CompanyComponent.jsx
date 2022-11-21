import React, { Component } from "react";

export default class CompanyComponent extends Component {
  state = {
    companyName: "AU Bank",
    countryOfOrigin: "India",
  };
  changeCompanyName = () => {
    alert("Button Is Clicked");
    this.setState({
      companyName: "AU Small Finance Bank",
    });
    // this.state.companyName = "AU Small Finance Bank";
  };
  render() {
    return (
      <div>
        <h3>Company Component -- State in Class Component</h3>
        <br />
        <br />
        Company Name: {this.state.companyName}
        <br />
        <br />
        Country of Origin: {this.state.countryOfOrigin}
        <br />
        <br />
        <button onClick={this.changeCompanyName}>Click Me</button>
      </div>
    );
  }
}
