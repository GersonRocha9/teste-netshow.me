export function convertDate(dateString: string): string {
  const dateObject = new Date(dateString)

  const formatNumber = (num: number): string => num.toString().padStart(2, '0')

  const day = formatNumber(dateObject.getUTCDate())
  const month = formatNumber(dateObject.getUTCMonth() + 1)
  const year = dateObject.getUTCFullYear()
  const hours = formatNumber(dateObject.getUTCHours())
  const minutes = formatNumber(dateObject.getUTCMinutes())

  return `${day}/${month}/${year} às ${hours}:${minutes}`
}
