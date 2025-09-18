import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThreeBlob from './ThreeBlob.jsx'

export default function Header() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 sm:-top-20 lg:-top-24 -left-12 sm:-left-14 lg:-left-16 h-56 sm:h-64 lg:h-80 w-56 sm:w-64 lg:w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-24 -right-12 sm:-right-14 lg:-right-16 h-56 sm:h-64 lg:h-80 w-56 sm:w-64 lg:w-80 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-10">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Find your dream <span className="text-cyan-300">home</span> or the perfect <span className="text-indigo-300">land</span>.
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg text-white/80 max-w-md sm:max-w-lg lg:max-w-xl"
            >
              Curated listings, transparent pricing, immersive 3D previews, and concierge-level support—all in one place.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 sm:mt-7 lg:mt-8 flex flex-wrap gap-2 sm:gap-3"
            >
              <Link
                to="/houses"
                className="glass rounded-lg sm:rounded-xl px-4 sm:px-5 py-2 sm:py-3 hover:bg-white/15 transition text-sm sm:text-base"
              >
                Explore Houses
              </Link>
              <Link
                to="/lands"
                className="rounded-lg sm:rounded-xl px-4 sm:px-5 py-2 sm:py-3 bg-white/90 text-slate-900 hover:bg-white transition text-sm sm:text-base"
              >
                Explore Lands
              </Link>
            </motion.div>
          </div>

          {/* 3D hero */}
          <div className="glass rounded-2xl sm:rounded-3xl p-2 sm:p-3 lg:p-5">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[440px] rounded-xl sm:rounded-2xl overflow-hidden">
              <ThreeBlob />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
