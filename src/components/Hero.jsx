import React, { Component } from 'react'
import Navbar from './Navbar'
import Button from '../Button';
import Card from './Card';
import Assignment from './Assignment';

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bgBody pb-5">
        <Navbar />
        <div className="container">
          <h1 className="fw-bold mb-3 display-4 ls-sm w-lg-50 px-0 mt-5">
            Design a better
            <br /> Website template
          </h1>
          <p className="mb-4 lead w-lg-50 px-0">
            Building your brand's Website and get detailed insights on how
            <br />
            templates are Created
          </p>
          <Button color="bg-success" text="text-white" name="FREE DOWNLOAD" />
        </div>

        <div className="container bg-light w-100 mt-5 gap-5 p-5 d-flex">
          <Card
            icon={this.props.icon1}
            heading={this.props.heading1}
            text={this.props.text1}
          />
          <Card
            icon={this.props.icon2}
            heading={this.props.heading2}
            text={this.props.text2}
          />
          <Card
            icon={this.props.icon3}
            heading={this.props.heading3}
            text={this.props.text3}
          />
          
        </div>
      </div>
    );
  }
}
