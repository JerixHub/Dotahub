// Custom fetch composable
export function useCustomFetch (url, options) {
  const runtimeConfig = useRuntimeConfig()
  const apiUrl = runtimeConfig.public.API_URL // You can set this in your environment variables

  const requestOptions = {
    headers: {
      Accept: 'application/json',
      ...options?.headers
    }
  }

  /**
   * TODO:
   * Handle Error Response - unauthorized
   *   - redirect to home if unauthorized
   */

  return useFetch(apiUrl + url, {
    ...options,
    ...requestOptions
  })
}
