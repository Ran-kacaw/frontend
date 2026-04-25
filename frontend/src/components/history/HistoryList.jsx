import React from 'react'
import HistoryCard from './HistoryCard'
import EmptyState from './EmptyState'
import { ListSkeleton } from '../shared/LoadingSkeleton'

const HistoryList = ({ historyList, loading, onDelete }) => {
  if (loading) {
    return <ListSkeleton count={4} />
  }

  if (!historyList || historyList.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="space-y-4">
      {historyList.map((item) => (
        <HistoryCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default HistoryList

