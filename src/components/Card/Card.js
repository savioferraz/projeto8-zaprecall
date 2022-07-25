import React from "react";
import "./Card.css";
import setinha from "../../assets/images/setinha.png";

export default function Card({ num, question, answer, setResult }) {
  const [cardState, setcardState] = React.useState("button");

  if (cardState === "button") {
    return (
      <div className="buttons" onClick={() => setcardState("question")}>
        Pergunta {num}
        <ion-icon name="play-outline"></ion-icon>
      </div>
    );
  }
  if (cardState === "question") {
    return (
      <div className="card">
        {question}
        <img
          src={setinha}
          alt="setinha"
          onClick={() => setcardState("answer")}
        />
      </div>
    );
  }
  if (cardState === "answer") {
    return (
      <div className="card">
        {answer}
        <div className="answers">
          <div
            className="answer no"
            onClick={() => {
              setcardState("wrong");
              setResult((oldResult) => [...oldResult, "wrong"]);
            }}
          >
            Não lembrei
          </div>
          <div
            className="answer maybe"
            onClick={() => {
              setcardState("almost");
              setResult((oldResult) => [...oldResult, "almost"]);
            }}
          >
            Quase não lembrei
          </div>
          <div
            className="answer yes"
            onClick={() => {
              setcardState("correct");
              setResult((oldResult) => [...oldResult, "correct"]);
            }}
          >
            Zap!
          </div>
        </div>
      </div>
    );
  }
  if (cardState === "wrong") {
    return (
      <div className="buttons wrong">
        Pergunta {num}
        <ion-icon name="close-circle"></ion-icon>
      </div>
    );
  }
  if (cardState === "almost") {
    return (
      <div className="buttons almost">
        Pergunta {num}
        <ion-icon name="help-circle"></ion-icon>
      </div>
    );
  }
  if (cardState === "correct") {
    return (
      <div className="buttons correct">
        Pergunta {num}
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>
    );
  }
}

// else {
//     <CardResult num={num} cardState={cardState} />
// }
