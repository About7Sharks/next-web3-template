import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Wallet from '../components/wallet'
import Footer from '../components/footer'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Dapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wallet/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="./">Web3</a>
        </h1>
        <p className={styles.description}>
          Get started by connecting your wallet.
        </p>
        <div className={styles.grid}>
          <a href="https://github.com/ethers-io/ethers.js/" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about web3 and the future of the net.</p>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  )
}