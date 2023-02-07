import React from "react"

export default function Flashcard(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.question && <p>{props.question}</p>}
            {isShown && <p>{props.answer}</p>}
            <button onClick={toggleShown}>Show Answer</button>
            <hr />
        </div>
    )
}