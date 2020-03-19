import React from "react";
import style from "./../styles/ReloadButton.module.css";
import FactLoader from "./../loaders/FactLoader.js";

export default function ReloadButton() {
  function newCatFact() {
    console.log("Hej");
  }

  return (
    <button className={style.button} onClick={newCatFact}>
      New Cat Fact
    </button>
  );
}
