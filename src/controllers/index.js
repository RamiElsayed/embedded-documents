const getPrice = (req, res) => {
  try {
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get price data | ${error.message}`);
  }
};
const getFeaturedAuthors = (req, res) => {
  try {
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get featured authors | ${error.message}`);
  }
};

module.exports = {
  getPrice,
  getFeaturedAuthors,
};
