const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET tất cả đơn hàng
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST thêm đơn hàng
router.post("/", async (req, res) => {
  const { product, amount, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO orders (product, amount, price) VALUES ($1, $2, $3) RETURNING *",
      [product, amount, price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
