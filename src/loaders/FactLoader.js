import React, { Component } from "react";
import style from "./../styles/Card.module.css";

export default class FactLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <p className={style.fact}>Loading</p>;
    } else {
      return <p className={style.fact}>{items.fact}</p>;
    }
  }
}
