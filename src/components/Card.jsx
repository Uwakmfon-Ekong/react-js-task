import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Assignment from "./Assignment";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value :"click here"
    }
  }
  render() {
    return (
      <div className="col-sm-3" style={{ width: "20rem" }}>
        <div className="card-body mx-3">
          {/* <i className="">{`${this.props.icon}`}</i> */}
          <Icon icon= {`${this.props.icon}`} className="icon" />
          <h3> {`${this.props.heading}`}</h3>
          <p className="card-text">{`${this.props.text}`}</p>
          <Assignment/>
        </div>
      </div>
    );
  }
}
