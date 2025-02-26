import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
<h1 className="text-4xl font-bold text-center">Context Api + Redux</h1>
<Login />
<Profile />
    </UserContextProvider>
  )
}

export default App
