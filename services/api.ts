// Base API URL - this should be configured based on your deployment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.mudinakon.com"

// Helper function for API requests
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`

  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }

  const response = await fetch(url, { ...defaultOptions, ...options })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || "An error occurred while fetching data")
  }

  return response.json()
}

// Authentication services
export const authService = {
  // Login user
  login: async (username: string, password: string) => {
    return fetchAPI("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
  },

  // Register new user
  register: async (userData: {
    username: string
    email: string
    password: string
  }) => {
    return fetchAPI("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    })
  },

  // Logout user
  logout: async () => {
    return fetchAPI("/api/auth/logout", {
      method: "POST",
    })
  },

  // Get current user info
  getCurrentUser: async () => {
    return fetchAPI("/api/auth/me")
  },
}

// Character services
export const characterService = {
  // Get user characters
  getUserCharacters: async () => {
    return fetchAPI("/api/characters/user")
  },

  // Get character details
  getCharacterDetails: async (characterId: number) => {
    return fetchAPI(`/api/characters/${characterId}`)
  },

  // Reset character
  resetCharacter: async (characterId: number) => {
    return fetchAPI(`/api/characters/${characterId}/reset`, {
      method: "POST",
    })
  },

  // Add stats to character
  addStats: async (characterId: number, stats: Record<string, number>) => {
    return fetchAPI(`/api/characters/${characterId}/stats`, {
      method: "POST",
      body: JSON.stringify(stats),
    })
  },

  // Clear PK status
  clearPKStatus: async (characterId: number) => {
    return fetchAPI(`/api/characters/${characterId}/clear-pk`, {
      method: "POST",
    })
  },

  // Reset stats
  resetStats: async (characterId: number) => {
    return fetchAPI(`/api/characters/${characterId}/reset-stats`, {
      method: "POST",
    })
  },
}

// Rankings services
export const rankingsService = {
  // Get top players
  getTopPlayers: async (limit = 10) => {
    return fetchAPI(`/api/rankings/players?limit=${limit}`)
  },

  // Get top resets
  getTopResets: async (limit = 10) => {
    return fetchAPI(`/api/rankings/resets?limit=${limit}`)
  },

  // Get top PvP
  getTopPvP: async (limit = 10) => {
    return fetchAPI(`/api/rankings/pvp?limit=${limit}`)
  },

  // Get top guilds
  getTopGuilds: async (limit = 10) => {
    return fetchAPI(`/api/rankings/guilds?limit=${limit}`)
  },
}

// News services
export const newsService = {
  // Get latest news
  getLatestNews: async (limit = 3) => {
    return fetchAPI(`/api/news?limit=${limit}`)
  },

  // Get news by category
  getNewsByCategory: async (category: string, limit = 5) => {
    return fetchAPI(`/api/news/category/${category}?limit=${limit}`)
  },

  // Get news details
  getNewsDetails: async (newsId: number) => {
    return fetchAPI(`/api/news/${newsId}`)
  },
}

// Server info services
export const serverService = {
  // Get server info
  getServerInfo: async () => {
    return fetchAPI("/api/server/info")
  },

  // Get server statistics
  getServerStats: async () => {
    return fetchAPI("/api/server/stats")
  },
}

