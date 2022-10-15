const { validationResult, body, param } = require("express-validator");

module.exports = (validations, status = 400) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(status).json({ errors: errors.array()[0] });
  };
};
