import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { CgEditFlipH } from 'react-icons/cg';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

const questionsArray = [
  {qNo: 1, title: 'JavaScript ', question: 'Which type of JavaScript language is ___', answers: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'], answer: 2, qStatus: 0},
  {qNo: 2, title: 'JavaScript ', question: 'In JavaScript, what is a block of statement?', answers: ['Conditional block', 'block that combines a number of statements into a single compound statement', 'both conditional block and a single statement', 'block that contains a single statement'], answer: 2, qStatus: 0},
  {qNo: 3, title: 'JavaScript', question: 'When interpreter encounters an empty statements, what it will do:', answers: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'], answer: 4, qStatus: 0},
  {qNo: 4, title: 'JavaScript', question: 'The "function" and " var" are known as:', answers: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'], answer: 3, qStatus: 0},
  {qNo: 5, title: 'JavaScript ', question: 'Which of the following variables takes precedence over the others if the names are the same?', answers: ['Global variable', 'The local element', 'The two of the above', 'None of the above'], answer:2, qStatus: 0},
  {qNo: 6, title: 'JavaScript', question: 'Which one of the following is the correct way for calling the JavaScript code?', answers: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'], answer: 4, qStatus: 0},
  {qNo: 7, title: 'JavaScript ', question: 'Which of the following type of a variable is volatile?', answers: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'], answer: 1, qStatus: 0},
  {qNo: 8, title: 'JavaScript', question: 'Which of the following option is used as hexadecimal literal beginning?', answers: ['00', '0x', '0X', 'Both 0x and 0X'], answer: 4, qStatus: 0},
  {qNo: 9, title: 'JavaScript ', question: 'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.', answers: ['Prints an exception error', 'Prints an overflow error', 'Displays "Infinity"', 'Prints the value as such'], answer: 3, qStatus: 0},
  {qNo: 10, title: 'JavaScript', question: 'Which one of the following also known as Conditional Expression:', answers: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'], answer: 4, qStatus: 0},
]

interface Status {
  qNo: number;
  status?: number;
}

const Home: NextPage = () => {
  const [questions, setQuestions] = useState(questionsArray)
  const [question, setQuestion] = useState<number>(0)
  const [isWin, setIsWin] = useState<boolean | null>(null)
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [status, setStatus] = useState<Status[]>([])
  const [completed, setCompleted] = useState<boolean>(false)

  const nextQuestion = () => {
    const currentQuestion = question
    currentQuestion < 9 && setQuestion(currentQuestion+1)
    setIsWin(null)
    setDisabled(false)
    setIsFlipped(false)
  }

  const selectedQuestion = (question: number) => {
    setQuestion(question-1)
    setIsWin(null)
    setDisabled(false)
    setIsFlipped(false)
  }

  const handleAnswer = (qNo: number, ans: number) => {
    const question = questions.filter(q => q.qNo === qNo)[0]
    setDisabled(true)
    if(question.answer === ans+1) {
      setIsWin(true)
      const questionsClone = questions
      questionsClone[qNo-1].qStatus = 1
      setQuestions(questionsClone)
      setStatus([...status, {qNo: qNo, status: 1}])
    }else {
      setIsWin(false)
      setStatus([...status, {qNo: qNo, status: 0}])
    }
  }

  const showAnswer = () => {
    isWin !== null && setIsFlipped(!isFlipped)
  }

  const finish = () => {
    setCompleted(true)
  }

  return (
    <div className="min-h-[calc(100vh-9rem)] px-5 sm:px-8 md:px-10 lg:px-0 max-w-[1080px] mx-auto flex items-center">
      <Head>
        <title>Flash Cards</title>
        <meta name="description" content="Flash Cards - Knowledge base of questions and answers app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
      </Head>
      <div className="w-[100%] flex">
        <div className="w-[30%] flex flex-col justify-center">
        {questions.map(question => (
          <div className="flex" key={question.qNo}>
            <AiOutlineCheck style={{ visibility: question.qStatus === 1 ? 'visible' : 'hidden' }} size={20} color="#021C1E" />
            <button disabled={question.qStatus === 1 && true} className={`text-left ml-2 ${question.qStatus === 1 && 'opacity-50 cursor-auto'}`} onClick={() => selectedQuestion(question.qNo)}>
              {question.qNo} {`${question.question.split(' ', 4).join(' ')}...`}
            </button>
          </div>
        ))}
        </div>
        <div className="mx-auto w-[70%] max-w-[700px] min-h-[350px] bg-greenery flex flex-col py-5 px-8 sm:px-10 md:px-20">
          <div className="text-blue_black flex-1 flex flex-col justify-center">
            <div className="pb-2">Question: {questions[question].qNo}</div>
            <div className="pb-2">{questions[question].question}</div>
            <div className="flex flex-col">
              {
                questions[question].answers.map((answer, index) => (
                  <button disabled={disabled} className={`text-left py-2 border-red-600 ${disabled && 'opacity-50 cursor-auto'} ${(isWin === false && index+1 === questions[question].answer && isFlipped) && 'border-b-2'}`} key={index} onClick={() => handleAnswer(questions[question].qNo, index)}>
                    {`${index+1}) ${answer}`}
                  </button>
                ))
              }
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <button className={`${(!disabled || isWin) && 'opacity-50'}`} onClick={()=>showAnswer()}><CgEditFlipH size={40} /></button>
              {isWin === false ? <AiOutlineClose size={40} color="red" /> : isWin === true  && <AiOutlineCheck size={40} color="#021C1E" />}
            </div>
            { !completed && (
                questions.length !== question+1 ?
                  <button className="text-rain py-2 px-10 rounded-lg bg-blue_black w-32 self-end" onClick={() => nextQuestion()}>Next</button>
                : <button className="text-rain py-2 px-10 rounded-lg bg-blue_black w-32 self-end" onClick={() => finish()}>Finish</button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
