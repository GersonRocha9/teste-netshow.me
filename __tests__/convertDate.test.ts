import { convertDate } from '../src/utils/convert-date'

it('should return a formatted date string', () => {
  const dateString = '2024-06-03T19:13:49.000000Z'

  const formattedDate = convertDate(dateString)
  expect(formattedDate).toBe('03/06/2024 às 19:13')
})
