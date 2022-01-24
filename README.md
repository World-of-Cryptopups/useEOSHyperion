# useEOSHypersion

React hooks for [Hyperion State API](https://github.com/eosrio/hyperion-history-api) data fetching.

All of the hooks wraps around `useSWR` from the [swr](https://swr.vercel.app) library.

## Install

```sh
npm install @crptopuppie/useeoshyperion --save
```

## Usage

Using the hooks is simple and made to be similar to `useSWR` for easier use.

```jsx
import { useGetActions } from '@cryptopuppie/useeoshyperion'

export default function App() {
  const { data } = useGetActions(
    { account: 'fckedupmyacc', limit: 5 },
    'https://testnet.waxsweden.org'
  )

  return (
    <div>
      <h3>Actions</h3>
      <ul>
        {data?.actions.map((i) => (
          <li key={i.trx_id}>
            {i.trx_id} - {new Date(i.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

- **With a Provider**

  If you do not want to set the api everytime in each hook, you can use a provider.

  ```tsx
  // Component.tsx
  import { useGetActions } from '@cryptopuppie/useeoshyperion'

  export default function Component() {
    const { data } = useGetActions({ account: 'fckedupmyacc', limit: 5 })

    return (
      <div>
        <h3>Actions</h3>
        <ul>
          {data?.actions.map((i) => (
            <li key={i.trx_id}>
              {i.trx_id} - {new Date(i.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // App.tsx
  import { UseHyperionProvider } from '@cryptopuppie/useeoshyperion'
  import Component from './Component.tsx'

  export default function App() {
    return (
      <UseHyperionProvider endpoint="https://testnet.waxsweden.org">
        <Component />
      </UseHyperionProvider>
    )
  }
  ```

- **Error handling**

  All of the hooks export error objects, `error` and `isError`.
  If `isError` is true, the `data` object is null and `error` otherwise.

  ```jsx
  import { useGetActions } from '@cryptopuppie/useeoshyperion'

  export default function App() {
    const { data, hasFailed, error } = useGetActions(
      { account: 'fckedupmyacc', limit: 5 },
      'https://testnet.waxsweden.org'
    )

    if (hasFailed) {
      return <p>{error.message}</p>
    }

    return (
      <div>
        <h3>Actions</h3>
        <ul>
          {data?.actions.map((i) => (
            <li key={i.trx_id}>
              {i.trx_id} - {new Date(i.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  ```

### Hooks

All of the main primary endpoints are implemented.

- Health
  - `useGetHealth`
- History

  - `useGetABISnapshot`
  - `useGetActions`
  - `useGetCreatedAccounts`
  - `useGetCreator`
  - `useGetDeltas`
  - `useGetSchedule`
  - `useGetTransaction`

- State
  - `useGetAccount`
  - `useGetKeyAccounts`
  - `useGetLinks`
  - `useGetProposals`
  - `useGetTokens`
  - `useGetVoters`
- Stats
  - `useGetMissedBlocks`

##

**2022 | World of Cryptopups**
