import { useState } from 'react';
import './App.css'
import Login from './components/login'
import User from './components/user'
import { UserProvider } from './contexts/userContext'

function App() {
  const [user , setUser] = useState(null);
  return(
    <UserProvider value={{user, setUser}}>
    <Login/>
    <User/>
    </UserProvider>
  )
}

export default App
