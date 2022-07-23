import React from "react";
import "./StartMenu.css"
import Logo from "../../assets/images/logo.png"

function StartMenu() {
    return (
        <div className="start">
            <img src={Logo} />
            <div className="tittle">ZapRecall</div>
            <div className="button">Iniciar Recall!</div>
        </div>
    )
    
}

export default StartMenu;