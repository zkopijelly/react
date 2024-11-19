import './App.css'
import Header from './components/Header'
import { UserProvider } from './contexts/UserContext'
import UserDetails from './components/UserDetails'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <>
      <UserProvider>
        <Header/>
        <UserDetails/>
        <UserProfile/>
      </UserProvider>
    </>
  )
}

export default App
