import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const Question = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className="min-h-[calc(100vh-9rem)] px-5 sm:px-8 md:px-10 lg:px-0 max-w-[1080px] mx-auto flex items-center justify-center ">
      <Head>
        <title>Flash Cards - Question {slug}</title>
        <meta name="description" content="Flash Cards - Knowledge base of questions and answers app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
      </Head>
      <div className="mx-auto w-[100%] max-w-[700px] min-h-[350px] bg-greenery flex flex-col py-5 px-8 sm:px-10 md:px-20">
        <div className="text-blue_black flex-1 flex flex-col justify-center">
          <div className="pb-2">Question: </div>
          <div className="flex flex-col">
            <div className="cursor-pointer py-2">Ans:1</div>
            <div className="cursor-pointer py-2">Ans:2</div>
            <div className="cursor-pointer py-2">Ans:3</div>
            <div className="cursor-pointer py-2">Ans:4</div>
          </div>
        </div>
        <button className="text-rain py-2 px-10 rounded-lg bg-blue_black w-32 self-end">Next</button>
      </div>
    </div>
  )
}

export default Question
