import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/landing/Navbar'
import ResultCard from '../components/result/ResultCard'
import AcneSummary from '../components/result/AcneSummary'
import SkincareRecommendation from '../components/result/SkincareRecommendation'
import SaveResultButton from '../components/result/SaveResultButton'
import { useAppStore } from '../store/useAppStore'
import { useHistory } from '../hooks/useHistory'
import { DetailSkeleton } from '../components/shared/LoadingSkeleton'
import { ArrowLeft } from 'lucide-react'

const ResultPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { detectionResult, historyList } = useAppStore()
  const { saveResult } = useHistory()

  const result = id
    ? historyList.find((h) => h.id === id)
    : detectionResult

  if (!result) {
    return (
      <div className="min-h-screen bg-bg">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-text-muted text-sm mb-4">Data hasil deteksi tidak ditemukan.</p>
          <button
            onClick={() => navigate('/detect')}
            className="bg-teal text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-dark transition"
          >
            Mulai Deteksi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-muted text-sm mb-6 hover:text-text transition"
        >
          <ArrowLeft size={18} /> Kembali
        </button>

        <ResultCard
          imageUrl={result.imageUrl}
          severity={result.severity}
          acneCount={result.acneCount}
          areas={result.areas}
        />

        <div className="mt-6">
          <AcneSummary
            acneCount={result.acneCount}
            areas={result.areas}
          />
        </div>

        {!id && (
          <div className="mt-6 flex justify-center">
            <SaveResultButton onSave={saveResult} />
          </div>
        )}

        {result.products && (
          <div className="mt-10">
            <SkincareRecommendation products={result.products} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultPage
