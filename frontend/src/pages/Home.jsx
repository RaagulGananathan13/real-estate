import { motion } from 'framer-motion'
import { Home as HomeIcon, Map, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section id="options" className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Choose your path</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white/70">Whether it’s a modern house or a prime plot—start here.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            className="group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
            initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="absolute -top-10 -right-10 h-32 sm:h-40 w-32 sm:w-40 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl glass grid place-items-center">
                <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">House Selling</h3>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/75">Explore designer homes with immersive tours, verified documents, and flexible financing.</p>
                <ul className="mt-3 sm:mt-4 grid gap-1 sm:gap-2 text-white/80 text-sm sm:text-base">
                  <li>• 3D walk-throughs</li>
                  <li>• Price history</li>
                  <li>• Neighborhood insights</li>
                </ul>
                <div className="mt-4 sm:mt-5">
                  <Link to="/houses" className="inline-block rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 text-slate-900 hover:bg-white transition text-sm sm:text-base">
                    Browse Houses →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
            initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="absolute -bottom-10 -left-10 h-32 sm:h-40 w-32 sm:w-40 bg-indigo-400/20 blur-3xl rounded-full" />
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl glass grid place-items-center">
                <Map className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Land Selling</h3>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/75">Discover plots with zoning, utilities, and development potential.</p>
                <ul className="mt-3 sm:mt-4 grid gap-1 sm:gap-2 text-white/80 text-sm sm:text-base">
                  <li>• Geo & zoning overlays</li>
                  <li>• Road/utility proximity</li>
                  <li>• ROI projections</li>
                </ul>
                <div className="mt-4 sm:mt-5">
                  <Link to="/lands" className="inline-block rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 text-slate-900 hover:bg-white transition text-sm sm:text-base">
                    Browse Lands →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="whyus" className="container mx-auto px-4 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard title="Verified & Secure" text="Document checks, title validation, escrow integrations." />
          <FeatureCard title="Premium Experience" text="Glassmorphism UI, buttery motion, and 3D previews." />
          <FeatureCard title="Concierge Support" text="From site visits to bank approvals—end-to-end help." />
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 pb-16 sm:pb-20 lg:pb-28">
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Tell us what you’re looking for</h3>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/75">Share preferences and budget—we’ll curate the best matches.</p>
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center">
            <Link to="/houses" className="rounded-lg sm:rounded-xl px-4 sm:px-5 py-2 sm:py-3 bg-white/90 text-slate-900 hover:bg-white transition text-sm sm:text-base">I want a House</Link>
            <Link to="/lands" className="glass rounded-lg sm:rounded-xl px-4 sm:px-5 py-2 sm:py-3 hover:bg-white/15 transition text-sm sm:text-base">I want Land</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ title, text }) {
  return (
    <motion.div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6"
      initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}>
      <h4 className="text-lg sm:text-xl font-semibold">{title}</h4>
      <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/75">{text}</p>
    </motion.div>
  )
}