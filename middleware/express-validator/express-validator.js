const { check } = require("express-validator");

module.exports.registerUserValidator = [
  check("name", "Name is empty").not().isEmpty(),
  check("lastName", "Last name is empty").not().isEmpty(),
  check("userName", "Username is empty").not().isEmpty(),
  check("email", "E-mail is empty").isEmail(),
  check(
    "password",
    "Passwords needs to contain 8 letters and less than 12"
  ).isLength({ min: 8, max: 12 }),
];

module.exports.loginUserValidator = [
  check("email", "E-mail is empty").isEmail(),
  check(
    "password",
    "Passwords needs to contain 8 letters and less than 12"
  ).isLength({ min: 8 }),
];

module.exports.searchUserByUsernameValidator = [
  check("userNameFromSearch", "Search is empty").not().isEmpty(),
];

module.exports.changeUserDataValidator = [
  check("changeUserData", "Input is empty").not().isEmpty(),
];

module.exports.checkActualPasswordValidator = [
  check(
    "passwordToCheck",
    "Password has to be 8 letter and below 12"
  ).isLength({ min: 8, max: 12 }),
];

module.exports.changeUserPasswordValidator = [
  check(
    "newPassword",
    "New password should be 8 letter and below 12"
  ).isLength({ min: 8, max: 12 }),
];

module.exports.createPostValidator = [
  check("textOfThePost", "Text is required").not().isEmpty(),
];

module.exports.searchForPostValidator = [
  check("searchInput", "Search is empty").not().isEmpty(),
];

module.exports.addCommentValidator = [
  check("textOfTheComment", "Text is empty").not().isEmpty(),
];

module.exports.addCommentToCommentValidator = [
  check("textOfInnerComment", "Text is empty").not().isEmpty(),
];
