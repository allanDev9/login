import { Login } from './Components/login'
import { Home } from './Components/Home'
import { useState } from 'react'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Components/Loading';

function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className='App'>
      {loading ? (
        <Loading />
      ) : (
        !user.length > 0 ? 
          <Login setUser={setUser} setLoading={setLoading} /> 
          : 
          <Home user={user} />
      )}
    </div>
  )
}

export default App
