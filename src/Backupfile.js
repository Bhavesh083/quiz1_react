import React, { useState } from 'react';
import Quizdata from './Quizdata'
import Ap from './Ap.css'; 

function App(){
	
const [curindex, setCurindex] = useState(0);
const [isEnd, setIsEnd] = useState(false);
const [score, setScore] = useState(0);
const [userAns, setUserAns] = useState(null);

const nextQues = () => {

   setUserAns(null);
   
   if(curindex < Quizdata.length-1){
	  setCurindex(curindex + 1)
}
   if (curindex === Quizdata.length-1) {
	  setIsEnd( true)
}
   if(userAns===Quizdata[curindex].answer){
	  setScore(score+1)
}
}


const checkAns = (answers) =>{
   setUserAns(answers)
}


return (
		<div className='app'>
			{isEnd? 
			(<div className='score-selection'>
				 <h2>You scored {score}/{Quizdata.length}</h2>
				 {Quizdata.map(data =>
				 <div className='keyshow'>
					<p>
					  {data.question}
					</p>
					<p>
					 Correct answer : {data.answer}
					</p>
				 </div>
				 )}
			</div>)
			:
			(<>
			<div className='question-section'>
				<div className='question-count'>
						<span>{curindex+1}</span>/{Quizdata.length}
				</div>
				<div className='question-text'>
					{Quizdata[curindex].question}
				</div>
			</div>    
			<div className='answer-section' >
				{Quizdata[curindex].options.map(option => 
				<button onClick={()=>checkAns(option)}>
					{option}
				</button>
				 )}
			</div>     
			<button className='next' onClick={()=>nextQues()}>
					{curindex<Quizdata.length-1?'Next':'Submit'}
			</button>
			</>
			)} 
		</div>
	)
}

export default App;