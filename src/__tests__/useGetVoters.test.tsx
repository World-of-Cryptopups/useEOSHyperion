import { renderHook } from '@testing-library/react-hooks'
import useGetVoters from '../hooks/state/useGetVoters'
import CustomWrapper from './wrapper'

describe('useGetVoters', () => {
  it('should fetch voters', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetVoters(
          {
            limit: 3
          },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.voters.length === 3)
  })
})
