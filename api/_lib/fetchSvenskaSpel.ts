export async function fetchSvenskaSpel(url: string) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "darkside-betting-api"
    }
  });

  if (!res.ok) {
    throw new Error(`Svenska Spel API error: ${res.status}`);
  }

  return res.json();
}