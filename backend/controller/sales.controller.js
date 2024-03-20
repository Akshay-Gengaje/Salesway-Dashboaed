import pool from "../db/db.js";
const getSales = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Sales");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSalesChannel = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sales_channel");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getSales, getSalesChannel };
