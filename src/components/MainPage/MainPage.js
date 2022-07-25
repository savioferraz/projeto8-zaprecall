import React from "react";
import "./MainPage.css";
import logo from "../../assets/images/logo-pequeno.png";
import BottomBar from "../BottomBar/BottomBar";
import Card from "../Card/Card";
import deck from "../Deck";

export default function MainPage(){

    const deckShuffle = deck.sort(() => Math.random() - 0.5)
    console.log(deckShuffle);

    return (
        <div className="mainPage">
            <div className="tittle">
                <img src={logo} alt="logo" />
                ZapRecall
            </div>
            <div className="content">
                {deckShuffle.map((key, index) => <Card key={index} num={index+1} question={deckShuffle.question} answer={deckShuffle.answer}/>)}
            </div>
            <BottomBar />
        </div>
    )
}