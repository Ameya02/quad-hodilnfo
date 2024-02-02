const axios  = require("axios");
const Ticker = require("../models/ticker");

const getData = async () => {
    try {
      await Ticker.destroy({
        truncate: true,
      });
      const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
      const tickers = response.data;
      const top10 = Object.keys(tickers).slice(0, 10);
      const data = top10.map(name => {
        return {
          name: tickers[name].name,
          last: tickers[name].last,
          buy: tickers[name].buy,
          sell: tickers[name].sell,
          volume: tickers[name].volume,
          base_unit: tickers[name].base_unit
        };
      });
      await Ticker.bulkCreate(data);
    } catch (error) {
      console.error(error);
    }
  }

module.exports = getData;