import Products from "../models/ProductsModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  }
  catch (error) {
    console.error(error);
  }
}
export const getProductsById = async (req, res) => {
  try {
    const products = await Products.findAll({ where: { id: req.params.id } });
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { product_name, stock, price, image } = req.body;
    await Products.create({
      product_name,
      stock,
      price,
      image
    });
    res.json({ msg: "Product created successfully" });
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { product_name, stock, price, image } = req.body;
    await Products.update({
      product_name,
      stock,
      price,
      image
    }, { where: { id: req.params.id } });
    res.json({ msg: "Product updated successfully" });
  } catch (error) {
    console.error(error);
  }
};


export const deleteProduct = async (req, res) => {
  try {
    await Products.destroy({ where: { id: req.params.id } });
    res.json({ msg: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
  }
};

