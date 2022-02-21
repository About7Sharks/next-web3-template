import styles from '../styles/Home.module.css'
import {Button } from 'antd'
export default function Documentation(){
  return(
      <div className={styles.card}>
      <h2>Documentation 🧠</h2>
      <p>Find in-depth information about web3 and the quickly expanding ecosystem of dapps and protocols one can use.
      </p>
      <br/><br/>
      <Button href='https://github.com/ethers-io/ethers.js/' >Explore</Button>
    </div>
  )
}
