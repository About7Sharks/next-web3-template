import { useWeb3React } from '@web3-react/core'
import {Button} from 'antd'
import styles from '../styles/Home.module.css'
export default function NFT(){
  const {account} = useWeb3React()

  return (
    <div className={styles.card}>
      <h2>Collect 🖼️</h2>
      <p>Opensea.io is a permisionless auction place. View, Sell, 
        and Buy NFT's on the open market.
      </p>
      <br/><br/>
      <Button href={`https://opensea.io/${account}`} >Explore</Button>
    </div>
  )
}
