import React from 'react'
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import FeatureSection from '../components/landing/FeatureSection'
import UploadPreviewSection from '../components/landing/UploadPreviewSection'
import Footer from '../components/landing/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeatureSection />
      <UploadPreviewSection />
      <Footer />
    </div>
  )
}

export default LandingPage
