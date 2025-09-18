import { useState } from 'react'
import { Building2, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const linkClass = ({ isActive }) =>
  `hover:opacity-80 transition ${isActive ? 'text-cyan-300' : ''}`

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto container mt-2 sm:mt-3 lg:mt-4 px-4 sm:px-6">
        <div className="glass rounded-lg sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl glass grid place-items-center">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-base sm:text-lg font-semibold tracking-tight">EstatePro</span>
            </Link>

            <nav className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
              <NavLink to="/houses" className={linkClass}>Houses</NavLink>
              <NavLink to="/lands" className={linkClass}>Lands</NavLink>
              <a href="#whyus" className="hover:opacity-80 transition">Why Us</a>
              <a href="#contact" className="hover:opacity-80 transition">Contact</a>
              <Link to="#" className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl glass hover:bg-white/15 transition text-sm sm:text-base">Sign in</Link>
            </nav>

            <button
              className="md:hidden glass rounded-lg sm:rounded-xl p-1.5 sm:p-2"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden pt-2 sm:pt-3"
              >
                <div className="grid gap-1.5 sm:gap-2 pb-1.5 sm:pb-2">
                  <NavLink onClick={()=>setOpen(false)} to="/houses" className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-white/10 text-sm sm:text-base">Houses</NavLink>
                  <NavLink onClick={()=>setOpen(false)} to="/lands" className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-white/10 text-sm sm:text-base">Lands</NavLink>
                  <a onClick={()=>setOpen(false)} href="#whyus" className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-white/10 text-sm sm:text-base">Why Us</a>
                  <a onClick={()=>setOpen(false)} href="#contact" className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-white/10 text-sm sm:text-base">Contact</a>
                  <Link onClick={()=>setOpen(false)} to="#" className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg glass text-sm sm:text-base">Sign in</Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}