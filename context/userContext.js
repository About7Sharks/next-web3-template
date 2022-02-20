import {createContext,useState,useContext} from 'react';
// const {active,account,library,connector,activate,deactivate} = useWeb3React()

export const userContext = createContext({
  active:false,
  account:'',
  library:'',
  connector:{},
  user: {},
  login: () => {},
  logout: () => {},
});

const USER = {
  name:''
}

export function UserContextProvider({children}){
  const [user, setUser] = useState(USER);
  return (
    <userContext.Provider value={{user}}>
      {children}
    </userContext.Provider>
  )
}

export function useUserContext(){
  const {user,login,logout} = useContext(userContext);
  return {
    user,
    login,
    logout
  }
}
