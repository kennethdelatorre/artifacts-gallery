import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()

  if (!user) {
    return null
  }

  return (
    <section className="profile">
      <h1>User Profile</h1>
      <div className="profile-card">
        <div className="profile-row">
          <span className="profile-label">Full Name</span>
          <span className="profile-value">{user.name}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{user.email}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Role</span>
          <span className="profile-value">{user.role}</span>
        </div>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  )
}