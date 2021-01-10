import React, { useState } from 'react';
import Ap from './Ap.css'; 

function App() {
  const [curQues, setCurQues] = useState(0) ;
  const [score, setScore] = useState(0);
  const [previd,setPrevid] = useState(null);
  const [showScore, setShowScore] = useState(false);

const questions = [
	   {
		    questionText: 'Who is the founder of Linux?',
	     	options: [
			{answerText: 'Linus Torvalds', isCorrect: true ,id:1 },
			{answerText: 'Mark Zuckerberg',isCorrect: false,id:2 },
			{answerText: 'Chris Wanstrath',isCorrect: false,id:3 },
			{answerText: 'Microsoft',      isCorrect: false,id:4 },
       ],
     	},
		{
			questionText: '23*10=',
			options: [
				{ answerText: '238', isCorrect: false,id:1},
				{ answerText: '173', isCorrect: false,id:2},
				{ answerText: '298', isCorrect: false,id:3},
				{ answerText: '230', isCorrect: true, id:4},
      ],
		},
		{
			questionText: 'Who owns Iphone?',
			options: [
				{answerText: 'Apple',     isCorrect: true ,id:1 },
				{answerText: 'Intel',     isCorrect: false,id:2 },
				{answerText: 'Amazon',    isCorrect: false,id:3 },
				{answerText: 'Microsoft', isCorrect: false,id:4 },
      ],
		},
		{
			questionText: '896-296',
			options: [
				{ answerText: '623',isCorrect:false,id:1 },
				{ answerText: '600' ,isCorrect:true, id:2},
				{ answerText: '500',isCorrect:false,id:3},
				{ answerText: '596',isCorrect:false,id:4}
      ],
    },
    {
			questionText: '1000%200',
			options: [
				{ answerText: '12', isCorrect:false,id:1},
				{ answerText: '8', isCorrect: false,id:2},
				{ answerText: '5', isCorrect: true ,id:3},
				{ answerText: '4', isCorrect: false,id:4},
      ],
		}
  ];
const checkScore = (isCorrect,id) =>{
  if(previd !== id){
  if(isCorrect) {
    var scr = score+1;
    setScore(scr);
    setPrevid(id);
      }}
}  
  const changeHandler = () =>{ 
    setPrevid(null);
  const newQues = curQues + 1 ;
   if(newQues < questions.length){
   setCurQues(newQues);
   }else{ 
     setShowScore(true);
   }
}
	return (
		<div className='app'>
			{showScore? (
				<div className='score-section'>Your score is  {score}/{questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{curQues+1}</span>/{questions.length}
						</div>
              <div className='question-text'>
               {questions[curQues].questionText}
              </div>  
					</div>
          <div className='answer-section' >
          {questions[curQues].options.map((option) => 
              (<button type='button'  key={option.id} onClick={() => checkScore(option.isCorrect,option.id)}>{option.answerText}</button>
          ))}
          </div>
          <button className='next' onClick={()=>changeHandler()}>{curQues<questions.length-1?'Next': 'Finish'}</button>
				</>
			)}
		</div>
	);
}
export default App ;