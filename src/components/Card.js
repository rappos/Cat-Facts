import React from "react";
import FactLoader from "./../loaders/FactLoader";
import style from "./../styles/Card.module.css";

export default function Card() {
  return (
    <div className={style.cardBackground}>
      <h1 className={style.title}>Cat Fact</h1>
      {/** Style-applying of the fdct is done in the FactLoader file due to god knows what. 
        Though it still is referencing the Card.module.css file*/}
      <FactLoader />
    </div>
  );
}
