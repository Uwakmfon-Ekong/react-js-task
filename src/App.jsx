import React, { Component } from "react";
import Button from "./Button";
import Hero from "./components/Hero";
import Assignment from "./components/Assignment"
import "./App.css";


export class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Hero
          icon1="emojione-monotone:light-bulb"
          width1 ="3rem"
          icon2="ph:carrot"
          icon3="solar:infinity-bold"
          heading1="Intituive thinking"
          heading2="Orange for Carrots"
          heading3="Infinite Possibilities"
          text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."
          text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."
          text3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."
        />
        
      </div>
    );
  }
}
