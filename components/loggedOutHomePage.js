import styles from '../styles/Home.module.css'
import Documentation from './documentation'
export default function LogoutHomePage(){
  return(
    <div>
       <p className={styles.description}>
    Get started by connecting your wallet.
  </p>
    <Documentation/>
  </div>
  )
}
