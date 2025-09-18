import { useMemo, useState } from 'react'
import Filters from '../components/Filters.jsx'
import ListingCard from '../components/ListingCard.jsx'
import { listings } from '../data/mockListings.js'

export default function Houses() {
  const data = listings.filter(x => x.category === 'house')
  const [f, setF] = useState({
    q: '', location: '', minPrice: '', maxPrice: '',
    minSize: '', maxSize: '', type: '', beds: '', baths: ''
  })

  const filtered = useMemo(() => {
    return data.filter(item => {
      if (f.q && !(`${item.title} ${item.features?.join(' ')}`.toLowerCase().includes(f.q.toLowerCase()))) return false
      if (f.location && item.location !== f.location) return false
      if (f.type && item.type !== f.type) return false
      if (f.beds && (item.beds ?? 0) < Number(f.beds)) return false
      if (f.baths && (item.baths ?? 0) < Number(f.baths)) return false
      if (f.minPrice && item.price < f.minPrice) return false
      if (f.maxPrice && item.price > f.maxPrice) return false
      if (f.minSize && item.size < f.minSize) return false
      if (f.maxSize && item.size > f.maxSize) return false
      return true
    })
  }, [data, f])

  const locations = data.map(d => d.location)

  return (
    <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 lg:mb-6">Houses</h1>
      <Filters values={f} onChange={(patch)=>setF(prev=>({...prev, ...patch}))} mode="house" locations={locations} />
      <div className="mt-4 sm:mt-5 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {filtered.map(item => <ListingCard key={item.id} item={item} />)}
        {filtered.length === 0 && (
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 col-span-full text-center text-white/80 text-sm sm:text-base">
            No results. Try widening your filters.
          </div>
        )}
      </div>
    </main>
  )
}