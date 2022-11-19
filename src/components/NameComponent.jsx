import React, { Component } from "react";

export class NameComponent extends Component {
  render() {
    const name = this.props.name;
    const message = this.props.message || "Badlaav Mumkin Hai !!";
    return (
      <div>
        <h3>Name: {name} </h3>
        <h4>Message:{message}</h4>
      </div>
    );
  }
}
