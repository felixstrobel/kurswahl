import Head from 'next/head'

export default function Start() {
    return (
        <div className="bg-light min-h-screen flex flex-col justify-center items-center">
            <Head>
                <title>Kurswahlhilfe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex-1 flex flex-col justify-center items-center">
                <div class="shadow overflow-hidden sm:rounded-lg">
                </div>
            </main>

            <footer className="bg-white shadow rounded-t-xl w-3/4 h-24 flex justify-center items-center">
                <p className="text-lg tracking-wide">Powered by <span className="font-bold">Felix Strobel</span></p>
            </footer>
        </div>
    )
}

// export default function Start() {
//     return (
//         <div className="bg-light h-screen flex justify-center items-center">
//             <Head>
//                 <title>Kurswahlhilfe</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <main className="">
//                 <h1 className="bg-red-800">
//                     Welcome to <a href="https://nextjs.org">Next.js!</a>
//                 </h1>

//                 <p className={styles.description}>
//                     Get started by editing{' '}
//                     <code className={styles.code}>pages/index.js</code>
//                 </p>
//             </main>

//             {/* <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//           </a>
//         </footer> */}
//         </div>
//     )
// }