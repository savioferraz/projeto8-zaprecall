import React from "react";
import "./Card.css";
import BackArrow from "../../assets/images/setinha.png";
import Answers from "../Answers/Answers";

function Card(){
    return (
        <div className="card">
            {/* O que é JSX?
            <img src={BackArrow} /> */}
            JSX é uma sintaxe para escrever HTML dentro do JS
            <Answers />

        </div>
    )
}

export default Card;