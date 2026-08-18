import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Icon({ children, label }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>{label}</title>
      {children}
    </svg>
  )
}

function HomeIcon() {
  return (
    <Icon label="Home">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
    </Icon>
  )
}

function GalleryIcon() {
  return (
    <Icon label="Gallery">
      <rect x="3" y="3" width="7.5" height="7.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" />
    </Icon>
  )
}

function LoginIcon() {
  return (
    <Icon label="Login">
      <path d="M15 3h5v18h-5" />
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
    </Icon>
  )
}

function SignupIcon() {
  return (
    <Icon label="Signup">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
      <path d="M18 8v6" />
      <path d="M15 11h6" />
    </Icon>
  )
}

function ProfileIcon() {
  return (
    <Icon label="Profile">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </Icon>
  )
}

function LogoutIcon() {
  return (
    <Icon label="Logout">
      <path d="M9 3H4v18h5" />
      <path d="M14 17l5-5-5-5" />
      <path d="M19 12H9" />
    </Icon>
  )
}

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Japan Artifacts
      </Link>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          aria-label="Home"
        >
          <HomeIcon />
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              aria-label="Gallery"
            >
              <GalleryIcon />
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              aria-label="Profile"
            >
              <ProfileIcon />
            </NavLink>
            <button
              type="button"
              className="nav-link nav-logout"
              onClick={logout}
              aria-label="Logout"
            >
              <LogoutIcon />
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              aria-label="Login"
            >
              <LoginIcon />
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              aria-label="Signup"
            >
              <SignupIcon />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}