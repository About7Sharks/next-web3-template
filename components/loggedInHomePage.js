import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'
import Vault from './vault'
import NFT from './nft'
import Documentation from './documentation'
import History from './history'
import AbiFetcher from './abiFetcher'
export default function LoginHomePage(){
  const {account} = useWeb3React()
  return(
    <div>
      <p className={styles.description}>
      Welcome {account}
      </p>
      <div className={styles.grid}>
    <AbiFetcher/>
    <Vault/>
    <NFT/>
    <History/>
    <Documentation/>
    </div>
  </div>
  )
}
