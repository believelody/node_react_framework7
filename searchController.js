const countries = require('./countries');

module.exports = (req, res) => {
  const { value } = req.query;
  const matches = [];
  if (value) {
    console.log(value);
    countries
      .filter(country => country.name.toLowerCase().startsWith(value.toLowerCase()))
      .map(country => matches.push(country.name));
  }

  res.json(matches);
};
