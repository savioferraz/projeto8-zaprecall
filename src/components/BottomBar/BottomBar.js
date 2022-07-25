import React from "react";
import "./BottomBar.css";

export default function BottomBar({ cont, Result, deckShuffle }) {
  const [num, setNum] = React.useState(deckShuffle.length);

  console.log(Result);
  return (
    <div className="bottomBar">
      {cont}/{num} CONCLUÌDOS
      <div className="results">
        {Result.map((cardState) => {
          if (cardState === "wrong") {
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
