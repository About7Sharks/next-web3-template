import styles from '../styles/Home.module.css'
import {Button} from 'antd'
export default function Vault(){
  return (
    <div className={styles.card}>
      <h2>Invest 🏦</h2>
      <p>Yearn.Finance a permisionless finance manager. Deposit funds
        into one of their vaults and earn yield on your investments.
      </p>
      <br/>
      <Button href='https://yearn.finance' >Explore</Button>
    </div>
  )
}
