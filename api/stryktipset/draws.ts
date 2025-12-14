// api/stryktipset/draws.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchSvenskaSpel } from "../_lib/fetchSvenskaSpel.js";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    const data = await fetchSvenskaSpel(
      "https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/"
    );
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch stryktipset draws" });
  }
}