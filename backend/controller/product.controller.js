import pool from "../db/db.js";

const SQL_SELECT_ALL_PRODUCTS = "SELECT * FROM Products";

const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query(SQL_SELECT_ALL_PRODUCTS);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getProducts };
