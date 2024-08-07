'use strict';

var utils = require('../utils/writer.js');
var RestApiUserController = require('../service/RestApiUserControllerService');

module.exports.createUserUsingPOST = function createUserUsingPOST (req, res, next, body) {
  RestApiUserController.createUserUsingPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUserUsingDELETE = function deleteUserUsingDELETE (req, res, next, id) {
  RestApiUserController.deleteUserUsingDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserUsingGET = function getUserUsingGET (req, res, next, id) {
  RestApiUserController.getUserUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsersUsingGET = function getUsersUsingGET (req, res, next) {
  RestApiUserController.getUsersUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyUserUsingPUT = function modifyUserUsingPUT (req, res, next, body, id) {
  RestApiUserController.modifyUserUsingPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
