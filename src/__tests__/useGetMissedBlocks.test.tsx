import { renderHook } from '@testing-library/react-hooks'
import useGetMissedBlocks from '../hooks/useGetMissedBlocks'
import CustomWrapper from './wrapper'

describe('useGetMissedBlocks', () => {
  it('should fetch missed blocks', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetMissedBlocks({}, 'https://testnet.waxsweden.org'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
  })
})
