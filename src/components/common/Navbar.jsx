import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Artifacts Gallery
      </Link>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Profile
            </NavLink>
            <button type="button" className="nav-link nav-logout" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}