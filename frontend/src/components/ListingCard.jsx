import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Home } from 'lucide-react'
import { formatCurrency, sqm } from '../utils/format.js'

export default function ListingCard({ item }) {
  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] transition"
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-48 bg-cover bg-center"
           style={{ backgroundImage: `url(${item.image})` }} />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-cyan-300 font-semibold">{formatCurrency(item.price)}</p>
        </div>
        <div className="mt-2 flex items-center gap-2 text-white/80">
          <MapPin className="h-4 w-4" /><span>{item.location}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-white/80">
          <Badge icon={<Home className="h-3.5 w-3.5" />}>{item.type}</Badge>
          {item.beds != null && <Badge icon={<Bed className="h-3.5 w-3.5" />}>{item.beds} Beds</Badge>}
          {item.baths != null && <Badge icon={<Bath className="h-3.5 w-3.5" />}>{item.baths} Baths</Badge>}
          <Badge>{item.size}{item.unit === 'perch' ? ' perch' : ` ${sqm(item)}`}</Badge>
        </div>
      </div>
    </motion.div>
  )
}

function Badge({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-sm">
      {icon} {children}
    </span>
  )
}
