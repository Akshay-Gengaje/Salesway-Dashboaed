import pool from "../db/db.js";
const getSales = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sales");
    const months = rows.map(row => row.Month);
    const lastYearSales = rows.map(row => row.Last_year);
    const thisYearSales = rows.map(row => row.This_year);

    const responseData = {
      months,
      last_year: lastYearSales,
      this_year: thisYearSales
    };
    res.status(200).json(responseData);
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
