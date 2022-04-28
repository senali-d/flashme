import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)] bg-red-400 max-w-[1080px] mx-auto">
      <Head>
        <title>Flash Cards</title>
        <meta name="description" content="Flash Cards - Knowledge base of questions and answers app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-red-500">
        Hello World
      </div>
    </div>
  )
}

export default Home
