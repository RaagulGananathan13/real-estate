export const formatCurrency = (n) =>
  new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(n)

export const sqm = (item) => {
  // if unit is perch, also show sqm hint
  if (item.unit === 'perch') {
    const sqm = (item.size * 25.2929).toFixed(0) // 1 perch ≈ 25.2929 m²
    return `${sqm} m²`
  }
  return 'sqft'
}
