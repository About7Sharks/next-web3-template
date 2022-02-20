import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'

export default function LogoutHomePage(){
  const {active,account,library,connector,activate,deactivate} = useWeb3React()

  return(
    <div>
       <p className={styles.description}>
    Welcome {account}
  </p>
  </div>
  )
}
