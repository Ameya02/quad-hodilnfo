const Ticker = require("../models/ticker");

const router = require("express").Router();
router.get('/',  async (req,res) => {
    let data = await Ticker.findAll();
    res.render("index", {details: data});
});
module.exports = router;