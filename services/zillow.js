const axios = require('axios');

const BRIDGE_BASE = 'https://api.bridgeinteractive.com';
const TOKEN = process.env.ZILLOW_BRIDGE_TOKEN;

if (!TOKEN) {
  throw new Error('⚠️ Defina ZILLOW_BRIDGE_TOKEN no seu .env');
}

async function getPropertyDetails(zpid) {
  const res = await axios.get(
    `${BRIDGE_BASE}/bridge/v1/property/${zpid}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );
  return res.data;
}

async function searchProperties({ city, state, minPrice, maxPrice }) {
  const res = await axios.get(
    `${BRIDGE_BASE}/bridge/v1/listings`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
      params: { city, state, minPrice, maxPrice }
    }
  );
  return res.data;
}

module.exports = { getPropertyDetails, searchProperties };
