import { useState } from 'react'
import './css/Login.css'

export function Login({ setUser, setLoading }) {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [numberNegatives, setNumberNegative] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (name === "" || password === "") {
      setError(true)
      return
    }
    // Verificar que la contraseña no contenga letras y no sea negativa
    if (!/^\d+$/.test(password)) {
      setError(true)
      setNumberNegative(true)
      return
    }

    if (parseInt(password && name) < 0) {
      setError(true)
      setNumberNegative(true)
      return
    }

    setError(false)
    setNumberNegative(false)
    setLoading(true)  // Activar loading cuando se envía el formulario

    setTimeout(() => {
      setLoading(false)  // Desactivar loading después de 5 segundos
      setUser([name])
    }, 3000)
    
  }

  return (
    <div className='container'>
      <h1 className='title'>Inicio De Sesión</h1>
      <form className='login' onSubmit={handleSubmit}>
        <div className='user-name'>
        <input
          className='input-name'
          type="text" placeholder='Nombre de usuario'
          value={name}
          onChange={e => setName(e.target.value)}
          
        />
        <label>Nombre de usuario</label>
        </div>
        <div className='user-name'>
        <input
          className='input-password'
          type="password" placeholder='Contraseña'
          value ={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label>Contraseña</label>
        </div>
        <button
        className='btn-login' 
        type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>Tienes que llenar todos los campos</p>}
      {numberNegatives && <p>No se permiten números negativos</p>}
    </div>
  )
}
