import React, { Component } from "react";
import style from "./../styles/ReloadButton.module.css";

export default class ReloadButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      func: true
    };
  }
  newCatFact = () => {
    this.props.newCatFact();
  };

  render() {
    return (
      <button className={style.button} onClick={this.newCatFact}>
        New Cat Fact
      </button>
    );
  }
}
