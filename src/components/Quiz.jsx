import React, { useState } from 'react'
import '../App.css';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

const Quiz = () => {

const[currentQuestion, setCurrentQuestion] = useState(0);

const[score, setScore] = useState(0);

const[clickedOption, setClickedOption] = useState(0);

const[showResult, setShowResult] = useState(false);

    const handleClick = ()=>{
        updateScore();
        if(currentQuestion<QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true);
        }
    }

    const updateScore = ()=>{ 
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }

    const resetAll = ()=>{
        setShowResult(false);
        setClickedOption(0);
        setScore(0);
        setCurrentQuestion(0);
    }

  return (
    <div>
      <h1>Quiz app</h1>
      <div className="container">
        {showResult? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} /> 
        ):(
        <>
            <div className="question">
            <span className="questionNo">{currentQuestion+1}. &nbsp;</span>
            <span className="questionText">{QuizData[currentQuestion].question}</span>
            </div>
            {QuizData[currentQuestion].options.map((option,i)=>{
                return(
                    <button 
                        key={i} 
                        className={
                            clickedOption===i+1? 'option selected':'option'
                        }
                        onClick={()=>setClickedOption(i+1)}    
                    >
                        {option}
                    </button>
                )
            })}
            <button 
                className="next"
                onClick={handleClick}
                >NEXT</button>  
        </>
    )}
        </div>
    </div>
  )
}

export default Quiz
