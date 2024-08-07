'use strict';


/**
 * API which responds according to the data related to the list of real-time Active Services at the time of search.
 *
 * domain_id Integer domain_id
 * instance_id Integer Specify the instance id to query the information of a specific instance. To query multiple instance separate each id by a comma \",\" (ex, instance_id=1001.1002). If the value was Null, the application information of all instances of the domain will be retrieved. (optional)
 * returns ActiveServiceListSet
 **/
exports.activeServiceListJSONUsingGET = function(domain_id,instance_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "instanceName" : "instanceName",
    "runningMode" : "runningMode",
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "runningSherpaOracleSequence" : 4,
    "elapseTime" : 2,
    "fetches" : 7,
    "sqls" : 1,
    "instanceId" : 9,
    "cpuTime" : 5,
    "statusElapseTime" : 6,
    "statusName" : "statusName",
    "alias" : "alias",
    "runningSherpaOracleInstanceName" : "runningSherpaOracleInstanceName",
    "startTime" : 1,
    "threadHash" : 7,
    "business" : [ 0, 0 ],
    "txid" : "txid",
    "runningTime" : 7,
    "sessionId" : 1,
    "businessOid" : [ 1, 1 ],
    "domainId" : 5,
    "statusMessage" : "statusMessage",
    "runningHash" : 2,
    "runningDataSourceName" : "runningDataSourceName",
    "runningFullText" : "runningFullText",
    "application" : "application",
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "runningConnectionName" : "runningConnectionName",
    "status" : "status"
  }, {
    "instanceOid" : 3,
    "instanceName" : "instanceName",
    "runningMode" : "runningMode",
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "runningSherpaOracleSequence" : 4,
    "elapseTime" : 2,
    "fetches" : 7,
    "sqls" : 1,
    "instanceId" : 9,
    "cpuTime" : 5,
    "statusElapseTime" : 6,
    "statusName" : "statusName",
    "alias" : "alias",
    "runningSherpaOracleInstanceName" : "runningSherpaOracleInstanceName",
    "startTime" : 1,
    "threadHash" : 7,
    "business" : [ 0, 0 ],
    "txid" : "txid",
    "runningTime" : 7,
    "sessionId" : 1,
    "businessOid" : [ 1, 1 ],
    "domainId" : 5,
    "statusMessage" : "statusMessage",
    "runningHash" : 2,
    "runningDataSourceName" : "runningDataSourceName",
    "runningFullText" : "runningFullText",
    "application" : "application",
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "runningConnectionName" : "runningConnectionName",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the data related to the list of real-time Active Services at the time of search.
 *
 * domain_id Integer domain_id
 * instance_id Integer Specify the instance id to query the information of a specific instance. To query multiple instance separate each id by a comma \",\" (ex, instance_id=1001.1002). If the value was Null, the application information of all instances of the domain will be retrieved. (optional)
 * returns ActiveServiceListSet
 **/
exports.activeServiceListJSONUsingPOST = function(domain_id,instance_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "instanceName" : "instanceName",
    "runningMode" : "runningMode",
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "runningSherpaOracleSequence" : 4,
    "elapseTime" : 2,
    "fetches" : 7,
    "sqls" : 1,
    "instanceId" : 9,
    "cpuTime" : 5,
    "statusElapseTime" : 6,
    "statusName" : "statusName",
    "alias" : "alias",
    "runningSherpaOracleInstanceName" : "runningSherpaOracleInstanceName",
    "startTime" : 1,
    "threadHash" : 7,
    "business" : [ 0, 0 ],
    "txid" : "txid",
    "runningTime" : 7,
    "sessionId" : 1,
    "businessOid" : [ 1, 1 ],
    "domainId" : 5,
    "statusMessage" : "statusMessage",
    "runningHash" : 2,
    "runningDataSourceName" : "runningDataSourceName",
    "runningFullText" : "runningFullText",
    "application" : "application",
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "runningConnectionName" : "runningConnectionName",
    "status" : "status"
  }, {
    "instanceOid" : 3,
    "instanceName" : "instanceName",
    "runningMode" : "runningMode",
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "runningSherpaOracleSequence" : 4,
    "elapseTime" : 2,
    "fetches" : 7,
    "sqls" : 1,
    "instanceId" : 9,
    "cpuTime" : 5,
    "statusElapseTime" : 6,
    "statusName" : "statusName",
    "alias" : "alias",
    "runningSherpaOracleInstanceName" : "runningSherpaOracleInstanceName",
    "startTime" : 1,
    "threadHash" : 7,
    "business" : [ 0, 0 ],
    "txid" : "txid",
    "runningTime" : 7,
    "sessionId" : 1,
    "businessOid" : [ 1, 1 ],
    "domainId" : 5,
    "statusMessage" : "statusMessage",
    "runningHash" : 2,
    "runningDataSourceName" : "runningDataSourceName",
    "runningFullText" : "runningFullText",
    "application" : "application",
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "runningConnectionName" : "runningConnectionName",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on Application Servicein Application Status
 *
 * domain_id Integer domain_id
 * end_time String Error occurs if the end time is smaller than the start time (Note: Units below hour must be set to zero)
 * start_time String Display of time according to the definition of Unix TimeStamp or time_pattern (Note: Units below hour must be set to zero)
 * application_name String Application name filter by pattern matching (optional)
 * instance_id List Brings the application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * max_row Integer Maximum number of results (optional)
 * sort_by_metrics String Reference metrics for alignment. The default value is calls (Calls) (optional)
 * time_pattern String Defines the pattern of the input value and output value corresponding to time. Either YYYYMMdd or YYYYMMddhh format is used. If there is no time_pattern variable, the unix timestamp value is used as an input value. (optional)
 * returns ApplicationStatusListSet
 **/
exports.applicationStatusListJSONUsingGET = function(domain_id,end_time,start_time,application_name,instance_id,max_row,sort_by_metrics,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "externalCallsPerTransaction" : 2.3021358869347655,
    "totalFetchTime" : 9,
    "sqlsPerTransaction" : 1.1730742509559433,
    "failures" : 7,
    "totalCpuTime" : 4,
    "totalExternalCallTime" : 5,
    "frontendTime" : 7,
    "cpuTimePerTransaction" : 1,
    "maxResponseTime" : 1,
    "responseTime" : 1.4894159098541704,
    "fetches" : 3,
    "networkTime" : 1,
    "sqls" : 7,
    "calls" : 6,
    "fetchTimePerTransaction" : 9.301444243932576,
    "externalCalls" : 5,
    "frontendMeasurements" : 4,
    "name" : "name",
    "sqlTimePerTransaction" : 6.84685269835264,
    "totalSqlTime" : 6,
    "fetchesPerTransaction" : 2.027123023002322,
    "totalResponseTime" : 9,
    "badResponses" : 0,
    "externalCallTimePerTransaction" : 5.962133916683182
  }, {
    "externalCallsPerTransaction" : 2.3021358869347655,
    "totalFetchTime" : 9,
    "sqlsPerTransaction" : 1.1730742509559433,
    "failures" : 7,
    "totalCpuTime" : 4,
    "totalExternalCallTime" : 5,
    "frontendTime" : 7,
    "cpuTimePerTransaction" : 1,
    "maxResponseTime" : 1,
    "responseTime" : 1.4894159098541704,
    "fetches" : 3,
    "networkTime" : 1,
    "sqls" : 7,
    "calls" : 6,
    "fetchTimePerTransaction" : 9.301444243932576,
    "externalCalls" : 5,
    "frontendMeasurements" : 4,
    "name" : "name",
    "sqlTimePerTransaction" : 6.84685269835264,
    "totalSqlTime" : 6,
    "fetchesPerTransaction" : 2.027123023002322,
    "totalResponseTime" : 9,
    "badResponses" : 0,
    "externalCallTimePerTransaction" : 5.962133916683182
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on Application Servicein Application Status
 *
 * domain_id Integer domain_id
 * end_time String Error occurs if the end time is smaller than the start time (Note: Units below hour must be set to zero)
 * start_time String Display of time according to the definition of Unix TimeStamp or time_pattern (Note: Units below hour must be set to zero)
 * application_name String Application name filter by pattern matching (optional)
 * instance_id List Brings the application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * max_row Integer Maximum number of results (optional)
 * sort_by_metrics String Reference metrics for alignment. The default value is calls (Calls) (optional)
 * time_pattern String Defines the pattern of the input value and output value corresponding to time. Either YYYYMMdd or YYYYMMddhh format is used. If there is no time_pattern variable, the unix timestamp value is used as an input value. (optional)
 * returns ApplicationStatusListSet
 **/
exports.applicationStatusListJSONUsingPOST = function(domain_id,end_time,start_time,application_name,instance_id,max_row,sort_by_metrics,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "externalCallsPerTransaction" : 2.3021358869347655,
    "totalFetchTime" : 9,
    "sqlsPerTransaction" : 1.1730742509559433,
    "failures" : 7,
    "totalCpuTime" : 4,
    "totalExternalCallTime" : 5,
    "frontendTime" : 7,
    "cpuTimePerTransaction" : 1,
    "maxResponseTime" : 1,
    "responseTime" : 1.4894159098541704,
    "fetches" : 3,
    "networkTime" : 1,
    "sqls" : 7,
    "calls" : 6,
    "fetchTimePerTransaction" : 9.301444243932576,
    "externalCalls" : 5,
    "frontendMeasurements" : 4,
    "name" : "name",
    "sqlTimePerTransaction" : 6.84685269835264,
    "totalSqlTime" : 6,
    "fetchesPerTransaction" : 2.027123023002322,
    "totalResponseTime" : 9,
    "badResponses" : 0,
    "externalCallTimePerTransaction" : 5.962133916683182
  }, {
    "externalCallsPerTransaction" : 2.3021358869347655,
    "totalFetchTime" : 9,
    "sqlsPerTransaction" : 1.1730742509559433,
    "failures" : 7,
    "totalCpuTime" : 4,
    "totalExternalCallTime" : 5,
    "frontendTime" : 7,
    "cpuTimePerTransaction" : 1,
    "maxResponseTime" : 1,
    "responseTime" : 1.4894159098541704,
    "fetches" : 3,
    "networkTime" : 1,
    "sqls" : 7,
    "calls" : 6,
    "fetchTimePerTransaction" : 9.301444243932576,
    "externalCalls" : 5,
    "frontendMeasurements" : 4,
    "name" : "name",
    "sqlTimePerTransaction" : 6.84685269835264,
    "totalSqlTime" : 6,
    "fetchesPerTransaction" : 2.027123023002322,
    "totalResponseTime" : 9,
    "badResponses" : 0,
    "externalCallTimePerTransaction" : 5.962133916683182
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * authUserList
 *
 * returns UserListSet
 **/
exports.authUserListUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "password" : "password",
    "name" : "name",
    "id" : "id",
    "group" : "group"
  }, {
    "password" : "password",
    "name" : "name",
    "id" : "id",
    "group" : "group"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * authUserList
 *
 * returns UserListSet
 **/
exports.authUserListUsingPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "password" : "password",
    "name" : "name",
    "id" : "id",
    "group" : "group"
  }, {
    "password" : "password",
    "name" : "name",
    "id" : "id",
    "group" : "group"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * authUserListXml
 *
 * no response value expected for this operation
 **/
exports.authUserListXmlUsingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * authUserListXml
 *
 * no response value expected for this operation
 **/
exports.authUserListXmlUsingPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * APIs to obtain information related to Business
 *
 * domain_id Integer domain_id
 * returns BusinessSet
 **/
exports.businessJSONUsingGET = function(domain_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "businessIndex" : "businessIndex",
    "ruleList" : [ "ruleList", "ruleList" ],
    "businessId" : 6,
    "name" : "name",
    "badResponseTime" : 0,
    "description" : "description",
    "businessOid" : 1
  }, {
    "businessIndex" : "businessIndex",
    "ruleList" : [ "ruleList", "ruleList" ],
    "businessId" : 6,
    "name" : "name",
    "badResponseTime" : 0,
    "description" : "description",
    "businessOid" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs to obtain information related to Business
 *
 * domain_id Integer domain_id
 * returns BusinessSet
 **/
exports.businessJSONUsingPOST = function(domain_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "businessIndex" : "businessIndex",
    "ruleList" : [ "ruleList", "ruleList" ],
    "businessId" : 6,
    "name" : "name",
    "badResponseTime" : 0,
    "description" : "description",
    "businessOid" : 1
  }, {
    "businessIndex" : "businessIndex",
    "ruleList" : [ "ruleList", "ruleList" ],
    "businessId" : 6,
    "name" : "name",
    "badResponseTime" : 0,
    "description" : "description",
    "businessOid" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * From among Domain/Instance/Business, APIs with which the user can check the retrieval results by Business.
 *
 * business_id Integer business_id
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * interval_minute Integer interval_minute
 * metrics String metrics
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_string
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns DBMetricsSet
 **/
exports.dbMetricsBusinessJSONUsingGET = function(business_id,domain_id,end_time,interval_minute,metrics,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "time" : "time",
    "value" : 0.8008281904610115
  }, {
    "time" : "time",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * From among Domain/Instance/Business, APIs with which the user can check the retrieval results by Business.
 *
 * business_id Integer business_id
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * interval_minute Integer interval_minute
 * metrics String metrics
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_string
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns DBMetricsSet
 **/
exports.dbMetricsBusinessJSONUsingPOST = function(business_id,domain_id,end_time,interval_minute,metrics,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "time" : "time",
    "value" : 0.8008281904610115
  }, {
    "time" : "time",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs with which the user can check the retrieval results of Domain among.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * interval_minute Integer interval_minute
 * metrics String metrics
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_string
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns DBMetricsSet
 **/
exports.dbMetricsDomainJSONUsingGET = function(domain_id,end_time,interval_minute,metrics,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "time" : "time",
    "value" : 0.8008281904610115
  }, {
    "time" : "time",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs with which the user can check the retrieval results of Domain among.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * interval_minute Integer interval_minute
 * metrics String metrics
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_string
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns DBMetricsSet
 **/
exports.dbMetricsDomainJSONUsingPOST = function(domain_id,end_time,interval_minute,metrics,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "time" : "time",
    "value" : 0.8008281904610115
  }, {
    "time" : "time",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * From among Domain/Instance/Business, APIs with which the user can check the retrieval results by Instance.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * instance_id Integer instance_id
 * interval_minute Integer interval_minute
 * metrics String metrics
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_string
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns DBMetricsSet
 **/
exports.dbMetricsInstanceJSONUsingGET = function(domain_id,end_time,instance_id,interval_minute,metrics,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "time" : "time",
    "value" : 0.8008281904610115
  }, {
    "time" : "time",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * From among Domain/Instance/Business, APIs with which the user can check the retrieval results by Instance.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * instance_id Integer instance_id
 * interval_minute Integer interval_minute
 * metrics String metrics
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_string
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns DBMetricsSet
 **/
exports.dbMetricsInstanceJSONUsingPOST = function(domain_id,end_time,instance_id,interval_minute,metrics,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "time" : "time",
    "value" : 0.8008281904610115
  }, {
    "time" : "time",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs to obtain information related to Domain
 *
 * returns DomainSet
 **/
exports.domainJSONUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "groupHierarchy" : [ "groupHierarchy", "groupHierarchy" ],
    "port" : 2,
    "instanceCount" : {
      "stopped" : 1,
      "total" : 5,
      "unlicensed" : 5,
      "live" : 6
    },
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "domainId" : 0
  }, {
    "groupHierarchy" : [ "groupHierarchy", "groupHierarchy" ],
    "port" : 2,
    "instanceCount" : {
      "stopped" : 1,
      "total" : 5,
      "unlicensed" : 5,
      "live" : 6
    },
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "domainId" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs to obtain information related to Domain
 *
 * returns DomainSet
 **/
exports.domainJSONUsingPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "groupHierarchy" : [ "groupHierarchy", "groupHierarchy" ],
    "port" : 2,
    "instanceCount" : {
      "stopped" : 1,
      "total" : 5,
      "unlicensed" : 5,
      "live" : 6
    },
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "domainId" : 0
  }, {
    "groupHierarchy" : [ "groupHierarchy", "groupHierarchy" ],
    "port" : 2,
    "instanceCount" : {
      "stopped" : 1,
      "total" : 5,
      "unlicensed" : 5,
      "live" : 6
    },
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "domainId" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * domainXML
 *
 * no response value expected for this operation
 **/
exports.domainXMLUsingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * API to view the results of search on ERROR in DB Search (Only support list, since 5.2.3 )
 *
 * domain_id Integer domain_id
 * end_time String If endTime is less than startTime, an error occurs.
 * start_time String Time notation as defined by Unix TimeStamp (in milisecond)/time_pattern
 * error_type List Able to specify Type of ERRORs . (All characters of string are should be capitalized) (optional)
 * instance_id List If it is null, the application information of all the Instances of the Domain is fetched. In order to query the information of individual Instance, it can be retrieved in the form of array concatenated with ',' character. e.g. instance_id=10001,10002 (optional)
 * time_pattern String Defines input value and output value patterns corresponding a time. It can be used as in the format of YYYYMMdd or YYYYMMddHH. If the value of the time_pattern variable does not exist, the unix timestamp value is used as the input value. (optional)
 * returns ErrorListSet
 **/
exports.errorListJSONUsingGET = function(domain_id,end_time,start_time,error_type,instance_id,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 1,
    "instanceId" : 6,
    "profileIndex" : 5,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "domainName" : "domainName",
    "txid" : "txid",
    "time" : "time",
    "message" : "message",
    "value" : 5.637376656633329,
    "applicationName" : "applicationName",
    "domainId" : 0
  }, {
    "instanceOid" : 1,
    "instanceId" : 6,
    "profileIndex" : 5,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "domainName" : "domainName",
    "txid" : "txid",
    "time" : "time",
    "message" : "message",
    "value" : 5.637376656633329,
    "applicationName" : "applicationName",
    "domainId" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on ERROR in DB Search (Only support list, since 5.2.3 )
 *
 * domain_id Integer domain_id
 * end_time String If endTime is less than startTime, an error occurs.
 * start_time String Time notation as defined by Unix TimeStamp (in milisecond)/time_pattern
 * error_type List Able to specify Type of ERRORs . (All characters of string are should be capitalized) (optional)
 * instance_id List If it is null, the application information of all the Instances of the Domain is fetched. In order to query the information of individual Instance, it can be retrieved in the form of array concatenated with ',' character. e.g. instance_id=10001,10002 (optional)
 * time_pattern String Defines input value and output value patterns corresponding a time. It can be used as in the format of YYYYMMdd or YYYYMMddHH. If the value of the time_pattern variable does not exist, the unix timestamp value is used as the input value. (optional)
 * returns ErrorListSet
 **/
exports.errorListJSONUsingPOST = function(domain_id,end_time,start_time,error_type,instance_id,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 1,
    "instanceId" : 6,
    "profileIndex" : 5,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "domainName" : "domainName",
    "txid" : "txid",
    "time" : "time",
    "message" : "message",
    "value" : 5.637376656633329,
    "applicationName" : "applicationName",
    "domainId" : 0
  }, {
    "instanceOid" : 1,
    "instanceId" : 6,
    "profileIndex" : 5,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "domainName" : "domainName",
    "txid" : "txid",
    "time" : "time",
    "message" : "message",
    "value" : 5.637376656633329,
    "applicationName" : "applicationName",
    "domainId" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on EVENT in DB Search
 *
 * domain_id Integer domain_id
 * end_time String If endTime is less than startTime, an error occurs.
 * start_time String Time notation as defined by Unix TimeStamp (in milisecond)/time_pattern
 * instance_id List If it is null, the application information of all the Instances of the Domain is fetched. In order to query the information of individual Instance, it can be retrieved in the form of array concatenated with ',' character. e.g. instance_id=10001,10002 (optional)
 * level List Specifies LEVEL of EVENT Data to query. (optional)
 * time_pattern String Defines input value and output value patterns corresponding a time. It can be used as in the format of YYYYMMdd or YYYYMMddHH. If the value of the time_pattern variable does not exist, the unix timestamp value is used as the input value. (optional)
 * returns EventListSet
 **/
exports.eventListJSONUsingGET = function(domain_id,end_time,start_time,instance_id,level,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 1,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "txid" : "txid",
    "message" : "message",
    "domainId" : 0,
    "eventLevel" : "eventLevel",
    "instanceId" : 6,
    "domainName" : "domainName",
    "metricsName" : "metricsName",
    "time" : "time",
    "value" : 5.962133916683182,
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 1,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "txid" : "txid",
    "message" : "message",
    "domainId" : 0,
    "eventLevel" : "eventLevel",
    "instanceId" : 6,
    "domainName" : "domainName",
    "metricsName" : "metricsName",
    "time" : "time",
    "value" : 5.962133916683182,
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on EVENT in DB Search
 *
 * domain_id Integer domain_id
 * end_time String If endTime is less than startTime, an error occurs.
 * start_time String Time notation as defined by Unix TimeStamp (in milisecond)/time_pattern
 * instance_id List If it is null, the application information of all the Instances of the Domain is fetched. In order to query the information of individual Instance, it can be retrieved in the form of array concatenated with ',' character. e.g. instance_id=10001,10002 (optional)
 * level List Specifies LEVEL of EVENT Data to query. (optional)
 * time_pattern String Defines input value and output value patterns corresponding a time. It can be used as in the format of YYYYMMdd or YYYYMMddHH. If the value of the time_pattern variable does not exist, the unix timestamp value is used as the input value. (optional)
 * returns EventListSet
 **/
exports.eventListJSONUsingPOST = function(domain_id,end_time,start_time,instance_id,level,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 1,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "txid" : "txid",
    "message" : "message",
    "domainId" : 0,
    "eventLevel" : "eventLevel",
    "instanceId" : 6,
    "domainName" : "domainName",
    "metricsName" : "metricsName",
    "time" : "time",
    "value" : 5.962133916683182,
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 1,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "txid" : "txid",
    "message" : "message",
    "domainId" : 0,
    "eventLevel" : "eventLevel",
    "instanceId" : 6,
    "domainName" : "domainName",
    "metricsName" : "metricsName",
    "time" : "time",
    "value" : 5.962133916683182,
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on External Call in Application Status
 *
 * domain_id Integer domain_id
 * end_time String Error occurs if the end time is smaller than the start time (Note: Units below hour must be set to zero)
 * start_time String Display of time according to the definition of Unix TimeStamp or time_pattern (Note: Units below hour must be set to zero)
 * instance_id List Brings the application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * max_row Integer Maximum number of results (optional)
 * sort_by_metrics String Reference metrics for alignment. The default value is calls (Calls) (optional)
 * time_pattern String Defines the pattern of the input value and output value corresponding to time. Either YYYYMMdd or YYYYMMddhh format is used. If there is no time_pattern variable, the unix timestamp value is used as an input value. (optional)
 * returns SqlAndExternalCallStatusListSet
 **/
exports.externalCallStatusListJSONUsingGET = function(domain_id,end_time,start_time,instance_id,max_row,sort_by_metrics,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  }, {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on External Call in Application Status
 *
 * domain_id Integer domain_id
 * end_time String Error occurs if the end time is smaller than the start time (Note: Units below hour must be set to zero)
 * start_time String Display of time according to the definition of Unix TimeStamp or time_pattern (Note: Units below hour must be set to zero)
 * instance_id List Brings the application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * max_row Integer Maximum number of results (optional)
 * sort_by_metrics String Reference metrics for alignment. The default value is calls (Calls) (optional)
 * time_pattern String Defines the pattern of the input value and output value corresponding to time. Either YYYYMMdd or YYYYMMddhh format is used. If there is no time_pattern variable, the unix timestamp value is used as an input value. (optional)
 * returns SqlAndExternalCallStatusListSet
 **/
exports.externalCallStatusListJSONUsingPOST = function(domain_id,end_time,start_time,instance_id,max_row,sort_by_metrics,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  }, {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getPiSqlJSON
 *
 * domain_id Integer domain_id
 * time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern
 * txid Long txid
 * profile_no Integer profile_no (optional)
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns PiSqlSet
 **/
exports.getPiSqlJSONUsingGET = function(domain_id,time,txid,profile_no,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "parameter" : [ "parameter", "parameter" ],
    "sql" : "sql"
  }, {
    "parameter" : [ "parameter", "parameter" ],
    "sql" : "sql"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getPiSqlJSON
 *
 * domain_id Integer domain_id
 * time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern
 * txid Long txid
 * profile_no Integer profile_no (optional)
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns PiSqlSet
 **/
exports.getPiSqlJSONUsingPOST = function(domain_id,time,txid,profile_no,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "parameter" : [ "parameter", "parameter" ],
    "sql" : "sql"
  }, {
    "parameter" : [ "parameter", "parameter" ],
    "sql" : "sql"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs to obtain information related to Instance
 *
 * domain_id Integer domain_id
 * returns InstanceSet
 **/
exports.instanceJSONUsingGET = function(domain_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 6,
    "configFilePath" : "configFilePath",
    "hostName" : "hostName",
    "instanceId" : 0,
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "version" : "version",
    "platform" : "platform",
    "status" : "status"
  }, {
    "instanceOid" : 6,
    "configFilePath" : "configFilePath",
    "hostName" : "hostName",
    "instanceId" : 0,
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "version" : "version",
    "platform" : "platform",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * APIs to obtain information related to Instance
 *
 * domain_id Integer domain_id
 * returns InstanceSet
 **/
exports.instanceJSONUsingPOST = function(domain_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 6,
    "configFilePath" : "configFilePath",
    "hostName" : "hostName",
    "instanceId" : 0,
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "version" : "version",
    "platform" : "platform",
    "status" : "status"
  }, {
    "instanceOid" : 6,
    "configFilePath" : "configFilePath",
    "hostName" : "hostName",
    "instanceId" : 0,
    "ipAddress" : "ipAddress",
    "name" : "name",
    "description" : "description",
    "version" : "version",
    "platform" : "platform",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * instanceXML
 *
 * no response value expected for this operation
 **/
exports.instanceXMLUsingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * API which responds according to the list of metrics available.
 *
 * returns MetricsSet
 **/
exports.metricsJSONUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "instance" : [ "instance", "instance" ],
    "application" : [ "application", "application" ],
    "business" : [ "business", "business" ],
    "externalCall" : [ "externalCall", "externalCall" ],
    "domain" : [ "domain", "domain" ],
    "sql" : [ "sql", "sql" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the list of metrics available.
 *
 * returns MetricsSet
 **/
exports.metricsJSONUsingPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "instance" : [ "instance", "instance" ],
    "application" : [ "application", "application" ],
    "business" : [ "business", "business" ],
    "externalCall" : [ "externalCall", "externalCall" ],
    "domain" : [ "domain", "domain" ],
    "sql" : [ "sql", "sql" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the data related to real-time business at the time of search.
 *
 * domain_id Integer domain_id
 * business_id Integer business_id (optional)
 * returns RealtimeBusinessDataSet
 **/
exports.realtimeBusinessUsingGET = function(domain_id,business_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "responseTime" : 9.301444,
    "tps" : 3.6160767,
    "activeService" : 0,
    "businessId" : 2,
    "businessName" : "businessName",
    "activeServiceRangeCount0" : 6,
    "domainId" : 7
  }, {
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "responseTime" : 9.301444,
    "tps" : 3.6160767,
    "activeService" : 0,
    "businessId" : 2,
    "businessName" : "businessName",
    "activeServiceRangeCount0" : 6,
    "domainId" : 7
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the data related to real-time business at the time of search.
 *
 * domain_id Integer domain_id
 * business_id Integer business_id (optional)
 * returns RealtimeBusinessDataSet
 **/
exports.realtimeBusinessUsingPOST = function(domain_id,business_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "responseTime" : 9.301444,
    "tps" : 3.6160767,
    "activeService" : 0,
    "businessId" : 2,
    "businessName" : "businessName",
    "activeServiceRangeCount0" : 6,
    "domainId" : 7
  }, {
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "responseTime" : 9.301444,
    "tps" : 3.6160767,
    "activeService" : 0,
    "businessId" : 2,
    "businessName" : "businessName",
    "activeServiceRangeCount0" : 6,
    "domainId" : 7
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the data related to the real-time Domain at the time of search.
 *
 * domain_id Integer domain_id (optional)
 * returns RealtimeDomainDataSet
 **/
exports.realtimeDomainUsingGET = function(domain_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "rejectRate" : 7.386282,
    "concurrentUser" : 7.0614014,
    "visitDay" : 1,
    "activeUser" : 2,
    "responseTime" : 1.2315135,
    "ipAddress" : "ipAddress",
    "visitHour" : 6,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 2,
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "port" : 4,
    "tps" : 1.0246457,
    "domainName" : "domainName",
    "activeService" : 0,
    "hitDay" : 3
  }, {
    "rejectRate" : 7.386282,
    "concurrentUser" : 7.0614014,
    "visitDay" : 1,
    "activeUser" : 2,
    "responseTime" : 1.2315135,
    "ipAddress" : "ipAddress",
    "visitHour" : 6,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 2,
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "port" : 4,
    "tps" : 1.0246457,
    "domainName" : "domainName",
    "activeService" : 0,
    "hitDay" : 3
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the data related to the real-time Domain at the time of search.
 *
 * domain_id Integer domain_id (optional)
 * returns RealtimeDomainDataSet
 **/
exports.realtimeDomainUsingPOST = function(domain_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "rejectRate" : 7.386282,
    "concurrentUser" : 7.0614014,
    "visitDay" : 1,
    "activeUser" : 2,
    "responseTime" : 1.2315135,
    "ipAddress" : "ipAddress",
    "visitHour" : 6,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 2,
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "port" : 4,
    "tps" : 1.0246457,
    "domainName" : "domainName",
    "activeService" : 0,
    "hitDay" : 3
  }, {
    "rejectRate" : 7.386282,
    "concurrentUser" : 7.0614014,
    "visitDay" : 1,
    "activeUser" : 2,
    "responseTime" : 1.2315135,
    "ipAddress" : "ipAddress",
    "visitHour" : 6,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 2,
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "port" : 4,
    "tps" : 1.0246457,
    "domainName" : "domainName",
    "activeService" : 0,
    "hitDay" : 3
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * realtimeDomainXML
 *
 * no response value expected for this operation
 **/
exports.realtimeDomainXMLUsingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * API which responds according to the data related to real-time instance at the time of search.
 *
 * domain_id Integer domain_id
 * instance_id Integer instance_id (optional)
 * returns RealtimeInstanceDataSet
 **/
exports.realtimeInstanceUsingGET = function(domain_id,instance_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 1,
    "rejectRate" : 7.4577446,
    "heapUsed" : 2.027123,
    "concurrentUser" : 7.0614014,
    "serviceRateByRange" : {
      "key" : 4.9652185
    },
    "visitDay" : 9,
    "instanceName" : "instanceName",
    "responseTime" : 1.1730742,
    "visitHour" : 9,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 7,
    "instanceDescription" : "instanceDescription",
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "instanceId" : 1,
    "arrivalRate" : 2.302136,
    "tps" : 5.025005,
    "activeService" : 0,
    "procMemory" : 6.846853,
    "heapCommitted" : 3.6160767,
    "hitDay" : 4,
    "procCPU" : 1.4894159
  }, {
    "instanceOid" : 1,
    "rejectRate" : 7.4577446,
    "heapUsed" : 2.027123,
    "concurrentUser" : 7.0614014,
    "serviceRateByRange" : {
      "key" : 4.9652185
    },
    "visitDay" : 9,
    "instanceName" : "instanceName",
    "responseTime" : 1.1730742,
    "visitHour" : 9,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 7,
    "instanceDescription" : "instanceDescription",
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "instanceId" : 1,
    "arrivalRate" : 2.302136,
    "tps" : 5.025005,
    "activeService" : 0,
    "procMemory" : 6.846853,
    "heapCommitted" : 3.6160767,
    "hitDay" : 4,
    "procCPU" : 1.4894159
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API which responds according to the data related to real-time instance at the time of search.
 *
 * domain_id Integer domain_id
 * instance_id Integer instance_id (optional)
 * returns RealtimeInstanceDataSet
 **/
exports.realtimeInstanceUsingPOST = function(domain_id,instance_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 1,
    "rejectRate" : 7.4577446,
    "heapUsed" : 2.027123,
    "concurrentUser" : 7.0614014,
    "serviceRateByRange" : {
      "key" : 4.9652185
    },
    "visitDay" : 9,
    "instanceName" : "instanceName",
    "responseTime" : 1.1730742,
    "visitHour" : 9,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 7,
    "instanceDescription" : "instanceDescription",
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "instanceId" : 1,
    "arrivalRate" : 2.302136,
    "tps" : 5.025005,
    "activeService" : 0,
    "procMemory" : 6.846853,
    "heapCommitted" : 3.6160767,
    "hitDay" : 4,
    "procCPU" : 1.4894159
  }, {
    "instanceOid" : 1,
    "rejectRate" : 7.4577446,
    "heapUsed" : 2.027123,
    "concurrentUser" : 7.0614014,
    "serviceRateByRange" : {
      "key" : 4.9652185
    },
    "visitDay" : 9,
    "instanceName" : "instanceName",
    "responseTime" : 1.1730742,
    "visitHour" : 9,
    "activeServiceRangeCount0" : 6,
    "domainId" : 9,
    "hitHour" : 7,
    "instanceDescription" : "instanceDescription",
    "activeServiceRangeCount2" : 5,
    "activeServiceRangeCount1" : 1,
    "activeServiceRangeCount3" : 5,
    "instanceId" : 1,
    "arrivalRate" : 2.302136,
    "tps" : 5.025005,
    "activeService" : 0,
    "procMemory" : 6.846853,
    "heapCommitted" : 3.6160767,
    "hitDay" : 4,
    "procCPU" : 1.4894159
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * realtimeInstanceXML
 *
 * no response value expected for this operation
 **/
exports.realtimeInstanceXMLUsingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * API to view the results of search on SQL in Application Status
 *
 * domain_id Integer domain_id
 * end_time String Error occurs if the end time is smaller than the start time (Note: Units below hour must be set to zero)
 * start_time String Display of time according to the definition of Unix TimeStamp or time_pattern (Note: Units below hour must be set to zero)
 * instance_id List Brings the application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * max_row Integer Maximum number of results (optional)
 * sort_by_metrics String Reference metrics for alignment. The default value is calls (Calls) (optional)
 * time_pattern String Defines the pattern of the input value and output value corresponding to time. Either YYYYMMdd or YYYYMMddhh format is used. If there is no time_pattern variable, the unix timestamp value is used as an input value. (optional)
 * returns SqlAndExternalCallStatusListSet
 **/
exports.sqlStatusListJSONUsingGET = function(domain_id,end_time,start_time,instance_id,max_row,sort_by_metrics,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  }, {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to view the results of search on SQL in Application Status
 *
 * domain_id Integer domain_id
 * end_time String Error occurs if the end time is smaller than the start time (Note: Units below hour must be set to zero)
 * start_time String Display of time according to the definition of Unix TimeStamp or time_pattern (Note: Units below hour must be set to zero)
 * instance_id List Brings the application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * max_row Integer Maximum number of results (optional)
 * sort_by_metrics String Reference metrics for alignment. The default value is calls (Calls) (optional)
 * time_pattern String Defines the pattern of the input value and output value corresponding to time. Either YYYYMMdd or YYYYMMddhh format is used. If there is no time_pattern variable, the unix timestamp value is used as an input value. (optional)
 * returns SqlAndExternalCallStatusListSet
 **/
exports.sqlStatusListJSONUsingPOST = function(domain_id,end_time,start_time,instance_id,max_row,sort_by_metrics,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  }, {
    "failures" : 1,
    "calls" : 6,
    "maxResponseTime" : 5,
    "responseTime" : 5.637376656633329,
    "name" : "name",
    "totalResponseTime" : 2,
    "badResponses" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to search X-View Basic Data using GUID.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * guid String guid
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern.
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns TransactionListSet
 **/
exports.transactionGuidJSONUsingGET = function(domain_id,end_time,guid,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to search X-View Basic Data using GUID.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * guid String guid
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern.
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns TransactionListSet
 **/
exports.transactionGuidJSONUsingPOST = function(domain_id,end_time,guid,start_time,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API for querying the profile data of the transaction using txid.
 *
 * domain_id Integer domain_id
 * time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern
 * txid Long txid
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns String
 **/
exports.transactionProfilesTextUsingGET = function(domain_id,time,txid,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to search the X-View Basic Data using time. Time is limited to 1 minute.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern.
 * instance_id List Brings the Application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns TransactionListSet
 **/
exports.transactionTimeJSONUsingGET = function(domain_id,end_time,start_time,instance_id,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to search the X-View Basic Data using time. Time is limited to 1 minute.
 *
 * domain_id Integer domain_id
 * end_time String Error occurs when the end time is smaller than startTime.
 * start_time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern.
 * instance_id List Brings the Application information of all Instances in the Domain when the value is Null. Able to retrieve the information of an individual instance using an arrangement form connected with the ',' character. e.g.) instance_id=10001,10002 (optional)
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns TransactionListSet
 **/
exports.transactionTimeJSONUsingPOST = function(domain_id,end_time,start_time,instance_id,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to search X-View Basic Data using txid.
 *
 * domain_id Integer domain_id
 * time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern
 * txid Long txid
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns TransactionSet
 **/
exports.transactionTxidJSONUsingGET = function(domain_id,time,txid,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to search X-View Basic Data using txid.
 *
 * domain_id Integer domain_id
 * time String Unix TimeStamp (milisecond unit) / Display of time in accordance with the definition of time_pattern
 * txid Long txid
 * time_pattern String Defines the temporal input value pattern and the temporal output value pattern. If there is no time_pattern variable value, both the input and output values use the unix timestampValue. (optional)
 * returns TransactionSet
 **/
exports.transactionTxidJSONUsingPOST = function(domain_id,time,txid,time_pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  }, {
    "instanceOid" : 3,
    "sqlTime" : 7,
    "clientId" : "clientId",
    "business" : [ 0, 0 ],
    "frontendTime" : 7,
    "instanceName" : "instanceName",
    "errorType" : "errorType",
    "responseTime" : 4,
    "businessId" : [ 6, 6 ],
    "businessName" : [ "businessName", "businessName" ],
    "txid" : "txid",
    "userId" : "userId",
    "domainId" : 5,
    "networkTime" : 2,
    "instanceId" : 9,
    "cpuTime" : 1,
    "externalcallTime" : 5,
    "clientIp" : "clientIp",
    "domainName" : "domainName",
    "fetchTime" : 2,
    "guid" : "guid",
    "startTime" : "startTime",
    "endTime" : "endTime",
    "applicationName" : "applicationName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

