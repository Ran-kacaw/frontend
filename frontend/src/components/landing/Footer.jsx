import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-teal-dark text-white/80 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 font-semibold text-base">
          <span className="text-white">Acne</span>
          <span className="text-yellow">Detect</span>
        </div>
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} AcneDetect. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}

export default Footer

