import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-light h-screen flex justify-center items-center">
      <Head>
        <title>Felix Strobel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Felix Strobel
        </h1>
      </main>
    </div >
  )
}
