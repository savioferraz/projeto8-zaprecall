import React from "react";
import "./BottomBar.css";

export default function BottomBar(num, cont, Result) {
    
    const [answer, setAnswer] = React.useState("")

    return (
        <div className="bottomBar">
            {/* {Result.map((answer) => {
                if (answer === wrong) {
                    return (
                        <div className="wrong"><ion-icon name="close-circle"></ion-icon></div>
                    )
                }
                if (answer === maybe) {
                    return (
                        <div className="buttons almost"><ion-icon name="help-circle"></ion-icon></div>
                    )
                }
                if (answer === correct) {
                    return (
                        <div className="buttons correct"><ion-icon name="checkmark-circle"></ion-icon></div>
                    )
                }
            }
            )}       
            {cont}/{num} CONCLUÌDOS */}
            CONCLUÌDOS
        </div>
    )
}