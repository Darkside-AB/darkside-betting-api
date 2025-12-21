import type { VercelRequest, VercelResponse } from "@vercel/node";
import { setCors } from "../_utils/cors.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://api.spela.svenskaspel.se/draw/1/styrktipset/draws/result"
    );

    if (!response.ok) {
      throw new Error("Upstream API failed");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stryktipset draws result" });
  }
}
