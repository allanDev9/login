import { Login } from './Components/login'
import { PaginaPrincipal } from './Components/PaginaPrincipal'
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
          <PaginaPrincipal user={user} setUser={setUser}/>
      )}
    </div>
  )
}

export default App