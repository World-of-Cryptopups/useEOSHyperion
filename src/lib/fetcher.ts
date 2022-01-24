import fetch from 'cross-fetch'
import urljoin from 'url-join'
import ChainError from './error'
import parseParams from './params'

const getFetcher = async (url: string, params?: Record<string, any>) => {
  let finalUrl = url
  if (params != null) {
    finalUrl = urljoin(url, '?' + parseParams(params))
  }

  const res = await fetch(finalUrl, { method: 'GET' })
  const data = await res.json()

  if (!res.ok) {
    throw new ChainError(data)
  }

  return data
}

const postFetcher = async (url: string, body?: Record<string, any>) => {
  const res = await fetch(url, {
    method: 'POST',
    body: body != null ? JSON.stringify(body) : null
  })
  const data = await res.json()

  if (!res.ok) {
    throw new ChainError(data)
  }

  return data
}

export { getFetcher, postFetcher }
