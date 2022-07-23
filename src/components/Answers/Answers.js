import React from "react";
import "./Answers.css"

function Answers() {
    return (
        <div className="answers">
        <div className="answer no">
            Não lembrei
        </div>
        <div className="answer almost">
            Quase não lembrei
        </div>
        <div className="answer yes">
            Zap!
        </div>
        </div>
    )
}

export default Answers;