import React from "react";
import "./MainPage.css";
import logo from "../../assets/images/logo-pequeno.png";
import Buttons from "../Butons/Buttons";
import Card from "../Card/Card";

function MainPage(){
    return (
        <div className="mainPage">
            <div className="tittle">
                <img src={logo} />
                ZapRecall
            </div>
            <div className="content">
                <Card />
                <Buttons />
                <Buttons />
                <Buttons />
            </div>
            <div className="bottomBar">
                respostas
            </div>
        </div>
        
    )
}

export default MainPage;