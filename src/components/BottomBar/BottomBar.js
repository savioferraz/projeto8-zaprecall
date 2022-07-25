import React from "react";
import "./BottomBar.css";
import Card from "../Card/Card";

export default function BottomBar({ Result, deckShuffle }) {
  const [num, setNum] = React.useState(deckShuffle.length);
  const [cont, setCont] = React.useState(Result.length);

  // const [answer, setAnswer] = React.useState("")
  console.log(Result);
  return (
    <div className="bottomBar">
      {cont}/{num} CONCLUÌDOS
      <div className="results">
        {Result.map((cardState) => {
          if (cardState === "wrong") {
            setCont++;
            return (
              <div className="wrong">
                <ion-icon name="close-circle"></ion-icon>
              </div>
            );
          }
          if (cardState === "almost") {
            return (
              <div className="almost">
                <ion-icon name="help-circle"></ion-icon>
              </div>
            );
          }
          if (cardState === "correct") {
            return (
              <div className="correct">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
