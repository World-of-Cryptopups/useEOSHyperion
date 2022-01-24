import { renderHook } from '@testing-library/react-hooks'
import useGetKeyAccounts from '../hooks/state/useGetKeyAccounts'
import CustomWrapper from './wrapper'

describe('useGetKeyAccounts', () => {
  it('should fetch accounts by public key', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetKeyAccounts(
          {
            public_key:
              'PUB_K1_8aEWP1BZxnb9TmH8wLa2sQY775fyavxhFwBGCfbT8jmTeBs4aw'
          },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.account_names[0] === 'atomicassets')
  })
})
