const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../db");

const { check, validationResult } = require("express-validator");
router.post(
  "/register",
  [
    check("username", "El nombre de usaurio es obligatorio").not().isEmpty(),
    check("password", "Password obligatior").not().isEmpty(),
    check("email", "Email incorrecto").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(422).json({ errores: errors.array() });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.cr
    res.json(user);
  }
);

module.exports = router;
