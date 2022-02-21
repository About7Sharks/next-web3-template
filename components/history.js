import {Button } from 'antd'
import styles from '../styles/Home.module.css'
import {useWeb3React} from '@web3-react/core'
export default function History(){
  const {account} = useWeb3React()
  return(
    <div className={styles.card}>
    <h2>Block History 🌎</h2>
    <p>View your wallets transaction history, and other information about the blockchain and your account.
    </p>
    <br/><br/>
    <Button href={`https://etherscan.io/address/${account}`} >Explore</Button>
  </div>
  )
}
