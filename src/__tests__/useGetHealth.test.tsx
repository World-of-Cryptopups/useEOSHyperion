import { renderHook } from '@testing-library/react-hooks'
import useGetHealth from '../hooks/useGetHealth'
import CustomWrapper from './wrapper'

describe('useGetHealth', () => {
  it('should fetch api health', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetHealth('https://testnet.waxsweden.org'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
    expect(result.current.data?.version !== '')
  })
})
