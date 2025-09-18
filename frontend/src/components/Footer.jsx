export default function Footer() {
  return (
    <footer className="pb-6 sm:pb-8 lg:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass rounded-xl sm:rounded-2xl px-4 sm:px-5 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-white/70 text-sm sm:text-base">© {new Date().getFullYear()} EstatePro. All rights reserved.</p>
          <nav className="flex items-center gap-3 sm:gap-5 text-white/80 text-sm sm:text-base">
            <a href="#privacy" className="hover:opacity-80">Privacy</a>
            <a href="#terms" className="hover:opacity-80">Terms</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}