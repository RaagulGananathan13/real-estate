import { useMemo } from 'react'

/**
 * Controlled filter bar — works for both Houses and Lands.
 * Props:
 *  values: { q, minPrice, maxPrice, minSize, maxSize, location, type, beds, baths, zoning }
 *  onChange: (patch) => void
 *  mode: 'house' | 'land'
 *  locations: string[]  (from dataset)
 */
export default function Filters({ values, onChange, mode, locations }) {
  const showBedsBaths = mode === 'house'
  const showZoning = mode === 'land'

  const update = (key) => (e) => onChange({ [key]: e.target.value })
  const updateNumber = (key) => (e) => onChange({ [key]: e.target.value ? Number(e.target.value) : '' })

  const uniqueLocations = useMemo(
    () => Array.from(new Set(locations)).sort(),
    [locations]
  )

  return (
    <div className="glass rounded-2xl p-4 md:p-5">
      <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-3 items-end">
        <div>
          <label className="label">Search</label>
          <input className="input w-full" placeholder="Title, features…"
                 value={values.q} onChange={update('q')} />
        </div>

        <div>
          <label className="label">Location</label>
          <select className="input w-full" value={values.location} onChange={update('location')}>
            <option value="">Any</option>
            {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        <div>
          <label className="label">Min Price</label>
          <input type="number" className="input w-full" placeholder="e.g. 5000000"
                 value={values.minPrice} onChange={updateNumber('minPrice')} />
        </div>

        <div>
          <label className="label">Max Price</label>
          <input type="number" className="input w-full" placeholder="e.g. 30000000"
                 value={values.maxPrice} onChange={updateNumber('maxPrice')} />
        </div>

        <div>
          <label className="label">{mode === 'land' ? 'Min Size (perch)' : 'Min Size (sqft)'}</label>
          <input type="number" className="input w-full"
                 value={values.minSize} onChange={updateNumber('minSize')} />
        </div>

        <div>
          <label className="label">{mode === 'land' ? 'Max Size (perch)' : 'Max Size (sqft)'}</label>
          <input type="number" className="input w-full"
                 value={values.maxSize} onChange={updateNumber('maxSize')} />
        </div>

        <div>
          <label className="label">Type</label>
          <select className="input w-full" value={values.type} onChange={update('type')}>
            <option value="">Any</option>
            {mode === 'house' ? (
              <>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
              </>
            ) : (
              <>
                <option value="Residential Land">Residential Land</option>
                <option value="Commercial Land">Commercial Land</option>
                <option value="Agricultural Land">Agricultural Land</option>
              </>
            )}
          </select>
        </div>

        {showBedsBaths && (
          <>
            <div>
              <label className="label">Beds</label>
              <select className="input w-full" value={values.beds} onChange={update('beds')}>
                <option value="">Any</option>
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>
            <div>
              <label className="label">Baths</label>
              <select className="input w-full" value={values.baths} onChange={update('baths')}>
                <option value="">Any</option>
                {[1,2,3,4].map(n => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>
          </>
        )}

        {showZoning && (
          <div>
            <label className="label">Zoning</label>
            <select className="input w-full" value={values.zoning} onChange={update('zoning')}>
              <option value="">Any</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Mixed">Mixed</option>
              <option value="Agricultural">Agricultural</option>
            </select>
          </div>
        )}
      </div>
    </div>
  )
}
