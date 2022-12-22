import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import logo from './ARTficial.png'
const Navbar = () => {
    
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" style={{paddingTop:"5px"}}/>          
        </Link>
        <Link to="/artworkform">
          <h1>Create artwork</h1>
        </Link>
        <nav>
           {user && (
            <div>
              <span className='usersEmail'>{user.email}</span>
              <button className='logout' onClick={handleClick}>Log out</button>
            </div>
            )}
            {!user && (
            <div className=''>
              <Link className='loginButton'to="/login">Login</Link>
              <Link className='signupButton'to="/signup">Signup</Link>
            </div>
            
            )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar