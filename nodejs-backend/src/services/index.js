const fcmMessage = require("./fcmMessage/fcmMessage.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(fcmMessage);
    // ~cb-add-configure-service-name~
};
