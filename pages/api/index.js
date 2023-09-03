// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest } from "next/server";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
