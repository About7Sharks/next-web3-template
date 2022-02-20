// This handles managing a wallet
import { injected} from '../Connector/connectors'
import { useWeb3React } from '@web3-react/core'
import {Button } from 'antd'
import Styles from  '../styles/Wallet.module.css'

export default function Wallet (){
  const {active,account,library,connector,activate,deactivate} = useWeb3React()
  async function connect(){
    try{
     await activate(injected)
    }catch(e){
     console.log(e)
    }
  }
  async function disconnect(){
      deactivate(injected)
  }
  return (
    <Button className={Styles.wallet} size='large' onClick={active?disconnect:connect} >
      {active?account.substring(0,5)+'...':'Sign-in'} 
    </Button>
  )
}
