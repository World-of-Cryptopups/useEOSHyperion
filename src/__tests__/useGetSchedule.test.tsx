import { renderHook } from '@testing-library/react-hooks'
import useGetSchedule from '../hooks/history/useGetSchedule'
import CustomWrapper from './wrapper'

describe('useGetSchedule', () => {
  it('should fetch producer schedule by version', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetSchedule({}, 'https://testnet.waxsweden.org'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
  })
})
