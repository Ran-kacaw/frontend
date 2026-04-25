import React from 'react'
import { Upload, Brain, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: <Upload size={28} className="text-teal" />,
    title: 'Upload Foto',
    desc: 'Unggah foto wajah Anda dengan kualitas yang jelas untuk analisis optimal.',
  },
  {
    icon: <Brain size={28} className="text-teal" />,
    title: 'Analisis AI',
    desc: 'Sistem AI kami akan mendeteksi dan menganalisis area jerawat pada wajah Anda.',
  },
  {
    icon: <Sparkles size={28} className="text-teal" />,
    title: 'Rekomendasi',
    desc: 'Dapatkan rekomendasi skincare yang sesuai dengan kondisi kulit Anda.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-section-title md:text-2xl font-semibold text-text text-center mb-10">
          Cara Kerja
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-teal-xlight rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-text mb-2">{step.title}</h3>
              <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

