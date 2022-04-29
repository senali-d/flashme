import type { NextPage } from 'next'
import Head from 'next/head'
import { CategoryCard } from '../components'

const questions = [
  {qNo: 0, qTitle: 'JavaScript ', qContent: 'What is mean by javascript'},
  {qNo: 1, qTitle: ' Basics', qContent: 'What is mean by javascript'},
  {qNo: 2, qTitle: 'JavaScript ', qContent: 'What is mean by javascript'},
  {qNo: 3, qTitle: ' Basics', qContent: 'What is mean by javascript'},
  {qNo: 4, qTitle: 'JavaScript Basics', qContent: 'What is mean by javascript'},
  {qNo: 5, qTitle: 'JavaScript ', qContent: 'What is mean by javascript'},
  {qNo: 6, qTitle: ' Basics', qContent: 'What is mean by javascript'},
  {qNo: 7, qTitle: 'JavaScript ', qContent: 'What is mean by javascript'},
  {qNo: 8, qTitle: ' Basics', qContent: 'What is mean by javascript'},
  {qNo: 9, qTitle: 'JavaScript ', qContent: 'What is mean by javascript'},
]

const Home: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)] px-5 sm:px-8 md:px-10 lg:px-0 max-w-[1080px] mx-auto">
      <Head>
        <title>Flash Cards</title>
        <meta name="description" content="Flash Cards - Knowledge base of questions and answers app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex gap-5 h-[500px]`}>
        <div>
          {
            questions.map(q => 
              <CategoryCard
                qNo={q.qNo}
                qTitle={q.qTitle}
                qContent={q.qContent}
              />
            )
          }
        </div>
        <div>
          {
            questions.map(q => 
              <CategoryCard
                key={q.qNo}
                qNo={q.qNo}
                qTitle={q.qTitle}
                qContent={q.qContent}
              />
            )
          }
        </div>
        <div>
          {
            questions.map(q => 
              <CategoryCard
                key={q.qNo}
                qNo={q.qNo}
                qTitle={q.qTitle}
                qContent={q.qContent}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home
