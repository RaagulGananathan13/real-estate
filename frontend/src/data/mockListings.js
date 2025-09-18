// src/data/mockListings.js

export const listings = [
  // 🏠 Houses
  {
    id: 'h1',
    category: 'house',
    type: 'House',
    title: 'Modern 3BR House, Colombo 07',
    location: 'Colombo 07',
    price: 42500000,
    size: 2100,
    beds: 3,
    baths: 3,
    features: ['parking', 'garden', 'near school'],
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h2',
    category: 'house',
    type: 'Apartment',
    title: 'Skyline Apartment, Sea View',
    location: 'Colombo 03',
    price: 65000000,
    size: 1400,
    beds: 3,
    baths: 2,
    features: ['pool', 'gym', 'security'],
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h3',
    category: 'house',
    type: 'Villa',
    title: 'Luxury Villa with Courtyard',
    location: 'Kandy',
    price: 88000000,
    size: 3200,
    beds: 4,
    baths: 4,
    features: ['mountain view', 'solar', 'garage'],
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h4',
    category: 'house',
    type: 'House',
    title: 'Cozy Family House with Garden',
    location: 'Negombo',
    price: 28000000,
    size: 1800,
    beds: 3,
    baths: 2,
    features: ['garden', 'garage', 'quiet area'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h5',
    category: 'house',
    type: 'Apartment',
    title: 'Luxury City Apartment',
    location: 'Colombo 02',
    price: 72000000,
    size: 1600,
    beds: 2,
    baths: 2,
    features: ['pool', 'balcony', 'city view'],
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h6',
    category: 'house',
    type: 'Villa',
    title: 'Beachfront Villa with Pool',
    location: 'Galle',
    price: 95000000,
    size: 4000,
    beds: 5,
    baths: 5,
    features: ['sea view', 'pool', 'private beach'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop'
  },

  // 🌱 Lands
  {
    id: 'l1',
    category: 'land',
    type: 'Residential Land',
    title: 'Prime Residential Plot (15 perch)',
    location: 'Maharagama',
    price: 17500000,
    size: 15,
    unit: 'perch',
    zoning: 'Residential',
    features: ['water', 'electricity', '20ft road'],
    image: 'https://images.unsplash.com/photo-1560184897-ae75f4184934?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'l2',
    category: 'land',
    type: 'Commercial Land',
    title: 'Road-front Plot (25 perch)',
    location: 'Kurunegala',
    price: 32000000,
    size: 25,
    unit: 'perch',
    zoning: 'Commercial',
    features: ['main road', 'bus stop', '3-phase'],
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'l3',
    category: 'land',
    type: 'Agricultural Land',
    title: 'Green Agri Parcel (2 acres)',
    location: 'Matale',
    price: 24000000,
    size: 320,
    unit: 'perch',
    zoning: 'Agricultural',
    features: ['stream', 'fertile', 'access road'],
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1d1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'l4',
    category: 'land',
    type: 'Residential Land',
    title: 'Corner Plot near School (12 perch)',
    location: 'Nugegoda',
    price: 21000000,
    size: 12,
    unit: 'perch',
    zoning: 'Residential',
    features: ['school nearby', 'quiet street'],
    image: 'https://images.unsplash.com/photo-1505842465776-3a8f46b8e8d0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'l5',
    category: 'land',
    type: 'Commercial Land',
    title: 'Highway Adjacent Commercial Plot (30 perch)',
    location: 'Katunayake',
    price: 45000000,
    size: 30,
    unit: 'perch',
    zoning: 'Commercial',
    features: ['near highway', 'good frontage'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'l6',
    category: 'land',
    type: 'Agricultural Land',
    title: 'Coconut Plantation (5 acres)',
    location: 'Chilaw',
    price: 60000000,
    size: 800,
    unit: 'perch',
    zoning: 'Agricultural',
    features: ['coconut trees', 'irrigation'],
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1d1?q=80&w=1200&auto=format&fit=crop'
  }
]
