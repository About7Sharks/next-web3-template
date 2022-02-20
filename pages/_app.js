import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import 'antd/dist/antd.css';
import {UserContextProvider} from '../context/userContext'
function getLibrary(provider) {
  return new Web3Provider(provider);
}
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </UserContextProvider>
    )
}

export default MyApp
