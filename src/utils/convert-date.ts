export function convertDate(dateString: string): string {
  const dateObject = new Date(dateString)

  const formatNumber = (num: number): string => num.toString().padStart(2, '0')

  const day = formatNumber(dateObject.getDate())
  const month = formatNumber(dateObject.getMonth() + 1)
  const year = dateObject.getFullYear()
  const hours = formatNumber(dateObject.getHours())
  const minutes = formatNumber(dateObject.getMinutes())

  return `${day}/${month}/${year} às ${hours}:${minutes}`
}
