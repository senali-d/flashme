import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
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
