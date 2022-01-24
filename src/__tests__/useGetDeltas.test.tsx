import { renderHook } from '@testing-library/react-hooks'
import useGetDeltas from '../hooks/history/useGetDeltas'
import CustomWrapper from './wrapper'

describe('useGetDeltas', () => {
  it('should fetch state deltas', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetDeltas(
          { code: 'eosio.token', limit: 2 },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.deltas.length === 2)
  })
})
