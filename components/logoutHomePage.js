import styles from '../styles/Home.module.css'

export default function LogoutHomePage(){
  return(
    <div>
       <p className={styles.description}>
    Get started by connecting your wallet.
  </p>
  <div className={styles.grid}>
    <a href="https://github.com/ethers-io/ethers.js/" className={styles.card}>
      <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about web3 and the future of the net.</p>
    </a>
  </div>
    </div>
  )
}
