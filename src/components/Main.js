import React from "react"

import Flashcard from "./Flashcard"
import FlashcardData from "./FlashcardData"

export default function Main() {
    const flashcardElements = FlashcardData.map(flashcard => {
        return (
            <Flashcard
                key={flashcard.id}
                question={flashcard.question}
                answer={flashcard.answer}
            />
        )
    })

    const [current, setCurrent] = useState(0);
    
    function previousCard() {
        setCurrent(current - 1);
    }
    
    function nextCard() {
        setCurrent(current + 1);
    }

    return (
        <>
            <h1>{flashcardElements[flashcardIndex]}</h1>
            <button onClick={previousCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
        </>
    )
}