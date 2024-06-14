import React, { useContext } from 'react'
import { ContextGlobal } from './context/global.context'
import { Link } from 'react-router-dom'
import routes from '../routes/routes'


const Navbar = () => {

  const {state, changeTheme} = useContext(ContextGlobal)

  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '97%'}}>
      <Link to={routes.home}><h2 style={{marginLeft: '2rem'}}>Odontology</h2></Link>
      <div style={{display: 'flex', alignContent: 'center', gap: '2rem'}}>
      <Link to={routes.contact}><p>Contact</p></Link>
      <Link to={routes.favs}><p>Favs</p></Link>
      <button onClick={changeTheme} className={state.theme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar