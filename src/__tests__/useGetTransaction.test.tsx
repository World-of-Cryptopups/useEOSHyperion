import { renderHook } from '@testing-library/react-hooks'
import useGetTransaction from '../hooks/history/useGetTransaction'
import CustomWrapper from './wrapper'

describe('useGetTransaction', () => {
  it('should fetch transaction', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetTransaction(
          'fe7c8c71ec325e3003079c8dcf6160eb8509d9638f028a74723039d35a32cfe5',
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(
      result.current.data?.trx_id ===
        'fe7c8c71ec325e3003079c8dcf6160eb8509d9638f028a74723039d35a32cfe5'
    )
  })
})
