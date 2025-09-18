// src/App.jsx
import { Routes, Route, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Houses from './pages/Houses.jsx'
import Lands from './pages/Lands.jsx'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Index route renders Header + Home (your landing) */}
        <Route index element={<>
          <Header />
          <Home />
        </>} />
        <Route path="houses" element={<Houses />} />
        <Route path="lands" element={<Lands />} />
        {/* Optional: 404 */}
        <Route path="*" element={
          <main className="container mx-auto px-3 py-16">
            <div className="glass rounded-2xl p-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Page not found</h1>
              <p className="text-white/70">Check the URL or go back home.</p>
            </div>
          </main>
        } />
      </Route>
    </Routes>
  )
}
