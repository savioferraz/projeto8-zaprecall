import React from "react";
import "../../assets/css/reset.css";
import "./App.css";
import MainPage from "../MainPage/MainPage";
import Logo from "../../assets/images/logo.png"

export default function App() {
    
    const [start, setStart] = React.useState(false);

    if (!start) {
        return (
            <div className="start">
                <img src={Logo} alt="logo" />
                <h1>ZapRecall</h1>
                <div className="button" onClick={() => setStart(true)}>Iniciar Recall!</div>
            </div>
        )
    }
    else {  
        return (
            <>
            <MainPage />
            </>
        )
    }
}