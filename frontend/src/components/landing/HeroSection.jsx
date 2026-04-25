import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  const scrollToUpload = () => {
    const el = document.getElementById('upload-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-teal to-teal-dark text-white overflow-hidden">
      <div className="absolute top-[-60px] right-[-60px] w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-yellow/20 rounded-full blur-xl" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <h1 className="text-hero md:text-5xl font-bold mb-4 leading-tight">
          Deteksi Jerawat dengan AI Cerdas
        </h1>
        <p className="text-white/80 max-w-xl mx-auto mb-8 text-body md:text-base">
          Unggah foto wajah Anda dan biarkan kecerdasan buatan kami menganalisis kondisi kulit Anda,
          mendeteksi jerawat, dan memberikan rekomendasi skincare yang tepat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToUpload}
            className="bg-yellow text-text px-8 py-3 rounded-full font-semibold text-sm hover:bg-yellow-dark transition shadow-lg"
          >
            Coba Sekarang
          </button>
          <button
            onClick={() => navigate('/detect')}
            className="border-2 border-white/40 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition"
          >
            Pelajari Lebih
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

