import React from 'react'
import ProductCard from './ProductCard'

const SkincareRecommendation = ({ products }) => {
  return (
    <div>
      <h3 className="text-section-title font-semibold text-text mb-4">Rekomendasi Skincare</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default SkincareRecommendation

