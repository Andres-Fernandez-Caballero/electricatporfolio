/**
 * Utility function for making API requests with proper error handling
 */
export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    
    let baseUrl = 'http://localhost:3000'
    if(process.env.VERCEL_URL) 
      baseUrl = process.env.VERCEL_URL
    else if(process.env.NEXT_PUBLIC_SERVER_URL) 
      baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
    
    // i want to check that url start with http:// or https://
    if (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")) {
        baseUrl = `https://${baseUrl}`
    }
    
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
  
  