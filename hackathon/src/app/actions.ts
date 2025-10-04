"use server"

export async function fetchTranscript(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch transcript: ${response.statusText}`)
    }

    const text = await response.text()
    return text
  } catch (error) {
    console.error("[v0] Error fetching transcript:", error)
    throw error
  }
}
