//import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/product";

export default async function handler(request, response) {
  await dbConnect();

  // check if the request method is GET

  if (request.method === "GET") {
    // make a request to the db to get the products
    const products = await Product.find();

    console.log("products: ", products);

    // send the products back
  }
  return response.status(200).json(products);
}
