const { Router } = require("express");
const Book = require("../models").book;
const auth = require("../auth/middleware");
const router = new Router();
const { Op } = require("sequelize");
const User = require("../models").user;

router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.findAll({
      include: User
    });
    res.status(200).json(allBooks);
  } catch (e) {
    console.log("error: ", e);
  }
});

router.get("/:title/:language", async (req, res) => {
  try {
    console.log("REQ PARAMS", req.params);
    const { title, language } = req.params;
    console.log(title, language);
    let filteredBooks;
    if (title !== "all" && language === "all") {
      filteredBooks = await Book.findAll({
        include: User,
        where: {
          title: title
          // {
          //   [Op.iLike]: " title"
          // }
        }
      });
    } else if (title === "all" && language !== "all") {
      filteredBooks = await Book.findAll({
        where: {
          language: language
        }
      });
    } else {
      filteredBooks = await Book.findAll({
        where: {
          title: title,
          language: language
        }
      });
    }
    console.log("FILTERED BOOKS", filteredBooks);
    return res.status(200).json(filteredBooks);
  } catch (e) {
    console.log("error: ", e);
  }
});

module.exports = router;
