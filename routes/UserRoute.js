const router = require("express").Router();
let users = require("../models/users");

router.route("/").get((req, res) => {
  users
    .find()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const website = req.body.website;
  const street = req.body.street;
  const suite = req.body.suite;
  const city = req.body.city;
  const zipcode = req.body.zipcode;

  const newUser = new users({
    name,
    username,
    email,
    password,
    phone,
    website,
    address: {
      street,
      suite,
      city,
      zipcode,
    },
  });

  newUser
    .save()
    .then((user) => res.json("User added" + user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  users
    .findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  users
    .findById("656dc1086574d7fe828d41a2")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/profile/").get((req, res) => {
  users
    .findById("656dc1086574d7fe828d41a2")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  users
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      website: req.body.website,
      address: {
        street: req.body.street,
        suite: req.body.suite,
        city: req.body.city,
        zipcode: req.body.zipcode,
      },
    })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  users
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
