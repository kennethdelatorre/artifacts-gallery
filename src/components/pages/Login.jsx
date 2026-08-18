import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [success, setSuccess] = useState('')

  const validate = () => {
    const newErrors = {}
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!password) {
      newErrors.password = 'Password is required'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    setFormError('')
    setSuccess('')

    try {
      await login(email.trim(), password)
      setSuccess('Login successful! Redirecting to gallery...')
      setTimeout(() => navigate('/gallery'), 800)
    } catch (err) {
      setFormError(
        err.message === 'Invalid credentials'
          ? 'Invalid email or password. Please try again.'
          : 'Something went wrong. Please try again.',
      )
      setSubmitting(false)
    }
  }

  return (
    <section className="auth-page">
      <img
        src="/images/sapporo.jpg"
        alt="Sapporo TV Tower and Odori Park"
        className="auth-image"
      />
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Log in to explore the gallery</p>

        {formError && (
          <div className="form-alert form-alert-error">{formError}</div>
        )}
        {success && (
          <div className="form-alert form-alert-success">{success}</div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember Me</span>
          </label>
          <a
            href="/login"
            className="forgot-password"
            onClick={(e) => e.preventDefault()}
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={submitting}
        >
          {submitting ? 'Logging in...' : 'Login'}
        </button>

        <p className="auth-switch">
          New to Artifacts Gallery? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </section>
  )
}