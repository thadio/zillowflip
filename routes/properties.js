const express = require('express');
const router = express.Router();
const { searchProperties, getPropertyDetails } = require('../services/zillow');

router.get('/', async (req, res, next) => {
  try {
    const { city, state, minPrice, maxPrice } = req.query;
    const props = await searchProperties({ city, state, minPrice, maxPrice });
    res.json(props);
  } catch (e) {
    next(e);
  }
});

router.get('/:zpid', async (req, res, next) => {
  try {
    const { zpid } = req.params;
    const details = await getPropertyDetails(zpid);
    res.json(details);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
