import dbConnect from "../../../util/dbConnect";
import Category from "../../../models/Category";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;
  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "POST") {
    try {
      const newCategories = await Category.create(req.body);
      res.status(200).json(newCategories);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
