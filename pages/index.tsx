import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const questions = [
  {qNo: 1, qTitle: 'JavaScript ', qContent: 'Which type of JavaScript language is ___', answers: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'], answer: 2},
  {qNo: 2, qTitle: 'JavaScript ', qContent: 'In JavaScript, what is a block of statement?', answers: ['Conditional block', 'block that combines a number of statements into a single compound statement', 'both conditional block and a single statement', 'block that contains a single statement'], answer: 2},
  {qNo: 3, qTitle: 'JavaScript', qContent: 'When interpreter encounters an empty statements, what it will do:', answers: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'], answer: 4},
  {qNo: 4, qTitle: 'JavaScript', qContent: 'The "function" and " var" are known as:', answers: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'], answer: 3},
  {qNo: 5, qTitle: 'JavaScript ', qContent: 'Which of the following variables takes precedence over the others if the names are the same?', answers: ['Global variable', 'The local element', 'The two of the above', 'None of the above'], answer:2},
  {qNo: 6, qTitle: 'JavaScript', qContent: 'Which one of the following is the correct way for calling the JavaScript code?', answers: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'], answer: 4},
  {qNo: 7, qTitle: 'JavaScript ', qContent: 'Which of the following type of a variable is volatile?', answers: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'], answer: 1},
  {qNo: 8, qTitle: 'JavaScript', qContent: 'Which of the following option is used as hexadecimal literal beginning?', answers: ['00', '0x', '0X', 'Both 0x and 0X'], answer: 4},
  {qNo: 9, qTitle: 'JavaScript ', qContent: 'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.', answers: ['Prints an exception error', 'Prints an overflow error', 'Displays "Infinity"', 'Prints the value as such'], answer: 3},
  {qNo: 10, qTitle: 'JavaScript', qContent: 'Which one of the following also known as Conditional Expression:', answers: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'], answer: 4},
]

const Home: NextPage = () => {
  const [question, setQuestion] = useState<number>(0)

  const nextQuestion = () => {
    const currentQuestion = question
    currentQuestion < 9 && setQuestion(currentQuestion+1)
  }

  const selectedQuestion = (question: number) => {
    setQuestion(question-1)
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
          <p key={question.qNo} className="cursor-pointer" onClick={() => selectedQuestion(question.qNo)}>
            {question.qNo} {`${question.qContent.split(' ', 4).join(' ')}...`}
          </p>
        ))}
        </div>
        <div className="mx-auto w-[70%] max-w-[700px] min-h-[350px] bg-greenery flex flex-col py-5 px-8 sm:px-10 md:px-20">
          <div className="text-blue_black flex-1 flex flex-col justify-center">
            <div className="pb-2">Question: {questions[question].qNo}</div>
            <div className="flex flex-col">
              {
                questions[question].answers.map((answer, index) => (
                  <div className="cursor-pointer py-2" key={index}>{`${index+1}) ${answer}`}</div>
                ))
              }
            </div>
          </div>
          <button className="text-rain py-2 px-10 rounded-lg bg-blue_black w-32 self-end" onClick={() => nextQuestion()}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Home
