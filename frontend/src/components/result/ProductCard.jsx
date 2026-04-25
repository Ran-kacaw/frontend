import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="bg-gray-100 rounded-lg h-32 mb-3 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-xs">No Image</span>
        )}
      </div>
      <h4 className="text-sm font-semibold text-text mb-1 truncate">{product.name}</h4>
      <p className="text-text-muted text-xs mb-2 line-clamp-2">{product.description}</p>
      <div className="flex items-center gap-1">
        <Star size={14} className="text-yellow fill-yellow" />
        <span className="text-xs text-text font-medium">{product.rating}</span>
      </div>
    </div>
  )
}

export default ProductCard

