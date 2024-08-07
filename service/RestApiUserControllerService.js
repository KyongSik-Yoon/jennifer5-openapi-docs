'use strict';


/**
 * Creating a JENNIFER User
 *
 * body User user
 * returns Object
 **/
exports.createUserUsingPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleting a JENNIFER User
 *
 * id String id
 * returns Object
 **/
exports.deleteUserUsingDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Getting a JENNIFER User
 *
 * id String id
 * returns User
 **/
exports.getUserUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "name" : "name",
  "id" : "id",
  "group" : "group"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Getting a JENNIFER Users
 *
 * returns List
 **/
exports.getUsersUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "name" : "name",
  "id" : "id",
  "group" : "group"
}, {
  "password" : "password",
  "name" : "name",
  "id" : "id",
  "group" : "group"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modifying a JENNIFER User
 *
 * body User user
 * id String id
 * returns Object
 **/
exports.modifyUserUsingPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

