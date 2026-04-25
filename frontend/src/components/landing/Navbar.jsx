import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Menu, X, User, LogOut } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-teal-dark/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 font-semibold text-lg">
          <span className="text-text">Acne</span>
          <span className="text-teal">Detect</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="text-text hover:text-teal transition">Home</Link>
          <Link to="/history" className="text-text hover:text-teal transition">History</Link>
          <Link to="/contact" className="text-text hover:text-teal transition">Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-teal-xlight text-teal-dark px-3 py-1.5 rounded-full text-sm font-medium"
              >
                <User size={16} />
                {user?.name || 'User'}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => { logout(); setDropdownOpen(false); navigate('/login') }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition"
                  >
                    <LogOut size={16} /> Keluar
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-teal text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-dark transition"
            >
              Login
            </Link>
          )}
        </div>

        <button className="md:hidden text-text" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm text-text">Home</Link>
          <Link to="/history" onClick={() => setMobileOpen(false)} className="block text-sm text-text">History</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-sm text-text">Contact Us</Link>
          {isAuthenticated ? (
            <button
              onClick={() => { logout(); setMobileOpen(false); navigate('/login') }}
              className="flex items-center gap-2 text-sm text-red-500"
            >
              <LogOut size={16} /> Keluar
            </button>
          ) : (
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block text-sm text-teal font-medium">Login</Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
