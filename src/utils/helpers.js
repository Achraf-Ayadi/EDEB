export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = (items, value) => {
  let getUnique = items.map((item) => item[value])
  if (value === 'colors') {
    getUnique = getUnique.flat()
  }
  return ['all', ...new Set(getUnique)]
}
