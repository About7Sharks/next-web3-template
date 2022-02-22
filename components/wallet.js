// This handles managing a wallet
import { injected} from '../Connector/connectors'
import { useWeb3React } from '@web3-react/core'
import {Button } from 'antd'
import Styles from  '../styles/Wallet.module.css'
import { useEffect,useState } from 'react'
import {ethers} from 'ethers'
export default function Wallet (){
  const {active,account,activate,deactivate} = useWeb3React()
  const [ens, setEns] = useState(null);
  async function connect(){
     await activate(injected)
  }
  useEffect(()=>{
    async function lookupENS(){
      const provider = new ethers.providers.Web3Provider(ethereum)
      const ens = await provider.lookupAddress(account);
      if(ens){
        setEns(ens)
      }else{
        console.log('Think about setting your ens resolver records https://docs.ens.domains/contract-api-reference/ens')
      }
    }
    // if signed in check for ens resolver
  if(active){ lookupENS() }},[account, active])

  async function disconnect(){
      deactivate(injected)
  }
  return (
    <Button className={Styles.wallet} size='large' onClick={active?disconnect:connect} >
    {/* if ens has been set display it; if active display wallet if not active show sign in */}
      {ens?ens:active?account.substring(0,5)+'...':'Sign-in'} 
    </Button>
  )
}
