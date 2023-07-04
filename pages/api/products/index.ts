import dbConnect from "../../../util/dbConnect";
import Product from "../../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "POST") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
