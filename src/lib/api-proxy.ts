const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!

export async function apiFetch<T>(
  endpoint: string,
  options: { method?: string; json?: any } = {}
): Promise<T> {
  const { json, method = "GET", headers } = options

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    credentials: "include",
    body: json ? JSON.stringify(json) : undefined,
  })

  if (!res.ok) {
    let message = `Request failed with status ${res.status}`
    try {
      const data = await res.json()
      if (data?.message) message = data.message
    } catch {}
    throw new Error(message)
  }

  return res.json()
}
