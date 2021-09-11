import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  name: string;
  password: string;
  age: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ name: "Divyanshu" });
}
