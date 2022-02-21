import styles from '../styles/Home.module.css'
import { JSONTree } from 'react-json-tree';
import {useState,useEffect} from 'react'
import {Button} from 'antd'
export default function AbiFetcher(){
  const [val, setVal] = useState({tryUsingThis:'0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359'});
  const [address,setAddress] = useState('0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359')
  const getABI = async ({address}) => {
 const data =await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`)
 let {result}= await data.json()   
 console.log(JSON.parse(result))
 setVal(JSON.parse(result))
}

const detectchange = (e) => {
  setAddress(e)
}

useEffect(() => {
 // getABI({address});
}, []);
return (
    <div className={styles.card}>
    <h2>ABI Fetcher 📦</h2>
    <p>Paste a verified ethereum contract address to return the contract abi. This currentley only works for the ethereum chain.</p>
    <input onChange={(e)=>detectchange(e.target.value)}/>
    <Button  onClick={()=>getABI({address})}>Search</Button>
    <JSONTree data={val} />;

    </div>);

} 
