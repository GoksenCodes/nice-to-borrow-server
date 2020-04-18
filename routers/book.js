const { Router } = require("express");
const Book = require("../models").book;
const auth = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const { title, language } = req.body;
    console.log(title);
    let filteredBooks;
    if (title && language === "all") {
      filteredBooks = await Book.findAll({
        where: {
          title: title
        }
      });
    } else if (!title && language !== "all") {
      filteredBooks = await Book.findAll({
        where: {
          language: language
        }
      });
    }
    return res.status(200).json(filteredBooks);
  } catch (e) {
    console.log("error: ", e);
  }
});

module.exports = router;
