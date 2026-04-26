import React from 'react'
import Navbar from '../components/landing/Navbar'
import HistoryList from '../components/history/HistoryList'
import PageTransition from '../components/shared/PageTransition'
import { useHistory } from '../hooks/useHistory'

const HistoryPage = () => {
  const { historyList, loading, deleteHistory } = useHistory()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f7f7] to-[#eaf4f4]">
      <Navbar />
      <PageTransition>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-section-title md:text-xl font-semibold text-text mb-2">
            Riwayat Deteksi
          </h1>
          <p className="text-text-muted text-xs mb-6">
            Lihat dan kelola riwayat deteksi jerawat Anda
          </p>
          <HistoryList historyList={historyList} loading={loading} onDelete={deleteHistory} />
        </div>
      </PageTransition>
    </div>
  )
}

export default HistoryPage
