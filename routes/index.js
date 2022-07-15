const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

const express = require("express");
const router = express.Router();

const app = express();
app.use(express.urlencoded({extended: true}))

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "mini message board", messages: messages });
  console.log(messages)
});

// this renders the new route which is the form
router.get("/new", function(req, res, next) {
  res.render("new");
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  console.log(req.body)
  res.redirect("/")
});

module.exports = router;
