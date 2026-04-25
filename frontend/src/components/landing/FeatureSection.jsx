import React from 'react'
import { Target, ShoppingBag, History, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: <Target size={24} className="text-teal" />,
    title: 'Deteksi Akurat',
    desc: 'Menggunakan model AI terbaru untuk mendeteksi jerawat dengan tingkat akurasi tinggi.',
  },
  {
    icon: <ShoppingBag size={24} className="text-teal" />,
    title: 'Rekomendasi Produk',
    desc: 'Dapatkan saran produk skincare yang sesuai dengan jenis dan tingkat keparahan jerawat Anda.',
  },
  {
    icon: <History size={24} className="text-teal" />,
    title: 'Riwayat Lengkap',
    desc: 'Simpan dan pantau perkembangan kondisi kulit Anda dari waktu ke waktu.',
  },
  {
    icon: <ShieldCheck size={24} className="text-teal" />,
    title: 'Data Aman',
    desc: 'Foto dan data Anda dienkripsi dan tidak akan dibagikan ke pihak ketiga.',
  },
]

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-section-title md:text-2xl font-semibold text-text text-center mb-10">
          Fitur Unggulan
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-bg rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-teal-xlight rounded-xl flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text mb-1">{f.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

