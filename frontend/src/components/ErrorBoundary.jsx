// src/components/ErrorBoundary.jsx
import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){ super(props); this.state = { hasError: false } }
  static getDerivedStateFromError(){ return { hasError: true } }
  componentDidCatch(err, info){ console.error('ErrorBoundary caught:', err, info) }
  render(){
    if (this.state.hasError) {
      return (
        <main className="container mx-auto px-3 py-16">
          <div className="glass rounded-2xl p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
            <p className="text-white/70">Try refreshing the page.</p>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}
