const express = require('express');
const router = express.Router();

// Rota placeholder de insights
router.get('/', (req, res) => {
  res.json({ message: 'Insights endpoint em construção' });
});

module.exports = router;
