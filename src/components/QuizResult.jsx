import React from 'react'

const QuizResult = (props) => {
  return (
    <>
        <div className='showscore'> 
        Your Score: {props.score}
        <br />
        Total Score: {props.totalScore}
        </div>
        <button className="next tryAgain" onClick={props.tryAgain}>TRY AGAIN</button>
    </>
  )
}

export default QuizResult
