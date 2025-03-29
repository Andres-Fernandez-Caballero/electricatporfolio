/**
 * Utility function for making API requests with proper error handling
 */
export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const baseUrl = process.env.VERCEL_URL
      ? process.env.VERCEL_URL
      : process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_SERVER_URL // optional
        : "http://localhost:3000"
  
    const url = `${baseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`
  
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        next: {
          revalidate: 3600, // Default cache time of 1 hour
        },
      })
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
      throw error
    }
  }
  
  