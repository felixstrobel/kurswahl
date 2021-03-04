import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-light min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Kurswahlhilfe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="shadow overflow-hidden sm:rounded-lg">
        </div>
      </main>

      <footer className="bg-white shadow rounded-t-xl w-3/4 h-24 flex justify-center items-center">
        <p className="text-lg tracking-wide">Powered by <span className="font-bold">Felix Strobel</span></p>
      </footer>
    </div>
  )
}
