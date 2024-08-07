'use strict';

var utils = require('../utils/writer.js');
var OpenApiController = require('../service/OpenApiControllerService');

module.exports.activeServiceListJSONUsingGET = function activeServiceListJSONUsingGET (req, res, next, domain_id, instance_id) {
  OpenApiController.activeServiceListJSONUsingGET(domain_id, instance_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.activeServiceListJSONUsingPOST = function activeServiceListJSONUsingPOST (req, res, next, domain_id, instance_id) {
  OpenApiController.activeServiceListJSONUsingPOST(domain_id, instance_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.applicationStatusListJSONUsingGET = function applicationStatusListJSONUsingGET (req, res, next, domain_id, end_time, start_time, application_name, instance_id, max_row, sort_by_metrics, time_pattern) {
  OpenApiController.applicationStatusListJSONUsingGET(domain_id, end_time, start_time, application_name, instance_id, max_row, sort_by_metrics, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.applicationStatusListJSONUsingPOST = function applicationStatusListJSONUsingPOST (req, res, next, domain_id, end_time, start_time, application_name, instance_id, max_row, sort_by_metrics, time_pattern) {
  OpenApiController.applicationStatusListJSONUsingPOST(domain_id, end_time, start_time, application_name, instance_id, max_row, sort_by_metrics, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authUserListUsingGET = function authUserListUsingGET (req, res, next) {
  OpenApiController.authUserListUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authUserListUsingPOST = function authUserListUsingPOST (req, res, next) {
  OpenApiController.authUserListUsingPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authUserListXmlUsingGET = function authUserListXmlUsingGET (req, res, next) {
  OpenApiController.authUserListXmlUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authUserListXmlUsingPOST = function authUserListXmlUsingPOST (req, res, next) {
  OpenApiController.authUserListXmlUsingPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.businessJSONUsingGET = function businessJSONUsingGET (req, res, next, domain_id) {
  OpenApiController.businessJSONUsingGET(domain_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.businessJSONUsingPOST = function businessJSONUsingPOST (req, res, next, domain_id) {
  OpenApiController.businessJSONUsingPOST(domain_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbMetricsBusinessJSONUsingGET = function dbMetricsBusinessJSONUsingGET (req, res, next, business_id, domain_id, end_time, interval_minute, metrics, start_time, time_pattern) {
  OpenApiController.dbMetricsBusinessJSONUsingGET(business_id, domain_id, end_time, interval_minute, metrics, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbMetricsBusinessJSONUsingPOST = function dbMetricsBusinessJSONUsingPOST (req, res, next, business_id, domain_id, end_time, interval_minute, metrics, start_time, time_pattern) {
  OpenApiController.dbMetricsBusinessJSONUsingPOST(business_id, domain_id, end_time, interval_minute, metrics, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbMetricsDomainJSONUsingGET = function dbMetricsDomainJSONUsingGET (req, res, next, domain_id, end_time, interval_minute, metrics, start_time, time_pattern) {
  OpenApiController.dbMetricsDomainJSONUsingGET(domain_id, end_time, interval_minute, metrics, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbMetricsDomainJSONUsingPOST = function dbMetricsDomainJSONUsingPOST (req, res, next, domain_id, end_time, interval_minute, metrics, start_time, time_pattern) {
  OpenApiController.dbMetricsDomainJSONUsingPOST(domain_id, end_time, interval_minute, metrics, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbMetricsInstanceJSONUsingGET = function dbMetricsInstanceJSONUsingGET (req, res, next, domain_id, end_time, instance_id, interval_minute, metrics, start_time, time_pattern) {
  OpenApiController.dbMetricsInstanceJSONUsingGET(domain_id, end_time, instance_id, interval_minute, metrics, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbMetricsInstanceJSONUsingPOST = function dbMetricsInstanceJSONUsingPOST (req, res, next, domain_id, end_time, instance_id, interval_minute, metrics, start_time, time_pattern) {
  OpenApiController.dbMetricsInstanceJSONUsingPOST(domain_id, end_time, instance_id, interval_minute, metrics, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.domainJSONUsingGET = function domainJSONUsingGET (req, res, next) {
  OpenApiController.domainJSONUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.domainJSONUsingPOST = function domainJSONUsingPOST (req, res, next) {
  OpenApiController.domainJSONUsingPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.domainXMLUsingGET = function domainXMLUsingGET (req, res, next) {
  OpenApiController.domainXMLUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.errorListJSONUsingGET = function errorListJSONUsingGET (req, res, next, domain_id, end_time, start_time, error_type, instance_id, time_pattern) {
  OpenApiController.errorListJSONUsingGET(domain_id, end_time, start_time, error_type, instance_id, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.errorListJSONUsingPOST = function errorListJSONUsingPOST (req, res, next, domain_id, end_time, start_time, error_type, instance_id, time_pattern) {
  OpenApiController.errorListJSONUsingPOST(domain_id, end_time, start_time, error_type, instance_id, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventListJSONUsingGET = function eventListJSONUsingGET (req, res, next, domain_id, end_time, start_time, instance_id, level, time_pattern) {
  OpenApiController.eventListJSONUsingGET(domain_id, end_time, start_time, instance_id, level, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventListJSONUsingPOST = function eventListJSONUsingPOST (req, res, next, domain_id, end_time, start_time, instance_id, level, time_pattern) {
  OpenApiController.eventListJSONUsingPOST(domain_id, end_time, start_time, instance_id, level, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.externalCallStatusListJSONUsingGET = function externalCallStatusListJSONUsingGET (req, res, next, domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern) {
  OpenApiController.externalCallStatusListJSONUsingGET(domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.externalCallStatusListJSONUsingPOST = function externalCallStatusListJSONUsingPOST (req, res, next, domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern) {
  OpenApiController.externalCallStatusListJSONUsingPOST(domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPiSqlJSONUsingGET = function getPiSqlJSONUsingGET (req, res, next, domain_id, time, txid, profile_no, time_pattern) {
  OpenApiController.getPiSqlJSONUsingGET(domain_id, time, txid, profile_no, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPiSqlJSONUsingPOST = function getPiSqlJSONUsingPOST (req, res, next, domain_id, time, txid, profile_no, time_pattern) {
  OpenApiController.getPiSqlJSONUsingPOST(domain_id, time, txid, profile_no, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.instanceJSONUsingGET = function instanceJSONUsingGET (req, res, next, domain_id) {
  OpenApiController.instanceJSONUsingGET(domain_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.instanceJSONUsingPOST = function instanceJSONUsingPOST (req, res, next, domain_id) {
  OpenApiController.instanceJSONUsingPOST(domain_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.instanceXMLUsingGET = function instanceXMLUsingGET (req, res, next) {
  OpenApiController.instanceXMLUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.metricsJSONUsingGET = function metricsJSONUsingGET (req, res, next) {
  OpenApiController.metricsJSONUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.metricsJSONUsingPOST = function metricsJSONUsingPOST (req, res, next) {
  OpenApiController.metricsJSONUsingPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeBusinessUsingGET = function realtimeBusinessUsingGET (req, res, next, domain_id, business_id) {
  OpenApiController.realtimeBusinessUsingGET(domain_id, business_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeBusinessUsingPOST = function realtimeBusinessUsingPOST (req, res, next, domain_id, business_id) {
  OpenApiController.realtimeBusinessUsingPOST(domain_id, business_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeDomainUsingGET = function realtimeDomainUsingGET (req, res, next, domain_id) {
  OpenApiController.realtimeDomainUsingGET(domain_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeDomainUsingPOST = function realtimeDomainUsingPOST (req, res, next, domain_id) {
  OpenApiController.realtimeDomainUsingPOST(domain_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeDomainXMLUsingGET = function realtimeDomainXMLUsingGET (req, res, next) {
  OpenApiController.realtimeDomainXMLUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeInstanceUsingGET = function realtimeInstanceUsingGET (req, res, next, domain_id, instance_id) {
  OpenApiController.realtimeInstanceUsingGET(domain_id, instance_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeInstanceUsingPOST = function realtimeInstanceUsingPOST (req, res, next, domain_id, instance_id) {
  OpenApiController.realtimeInstanceUsingPOST(domain_id, instance_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realtimeInstanceXMLUsingGET = function realtimeInstanceXMLUsingGET (req, res, next) {
  OpenApiController.realtimeInstanceXMLUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sqlStatusListJSONUsingGET = function sqlStatusListJSONUsingGET (req, res, next, domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern) {
  OpenApiController.sqlStatusListJSONUsingGET(domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sqlStatusListJSONUsingPOST = function sqlStatusListJSONUsingPOST (req, res, next, domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern) {
  OpenApiController.sqlStatusListJSONUsingPOST(domain_id, end_time, start_time, instance_id, max_row, sort_by_metrics, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionGuidJSONUsingGET = function transactionGuidJSONUsingGET (req, res, next, domain_id, end_time, guid, start_time, time_pattern) {
  OpenApiController.transactionGuidJSONUsingGET(domain_id, end_time, guid, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionGuidJSONUsingPOST = function transactionGuidJSONUsingPOST (req, res, next, domain_id, end_time, guid, start_time, time_pattern) {
  OpenApiController.transactionGuidJSONUsingPOST(domain_id, end_time, guid, start_time, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionProfilesTextUsingGET = function transactionProfilesTextUsingGET (req, res, next, domain_id, time, txid, time_pattern) {
  OpenApiController.transactionProfilesTextUsingGET(domain_id, time, txid, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionTimeJSONUsingGET = function transactionTimeJSONUsingGET (req, res, next, domain_id, end_time, start_time, instance_id, time_pattern) {
  OpenApiController.transactionTimeJSONUsingGET(domain_id, end_time, start_time, instance_id, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionTimeJSONUsingPOST = function transactionTimeJSONUsingPOST (req, res, next, domain_id, end_time, start_time, instance_id, time_pattern) {
  OpenApiController.transactionTimeJSONUsingPOST(domain_id, end_time, start_time, instance_id, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionTxidJSONUsingGET = function transactionTxidJSONUsingGET (req, res, next, domain_id, time, txid, time_pattern) {
  OpenApiController.transactionTxidJSONUsingGET(domain_id, time, txid, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionTxidJSONUsingPOST = function transactionTxidJSONUsingPOST (req, res, next, domain_id, time, txid, time_pattern) {
  OpenApiController.transactionTxidJSONUsingPOST(domain_id, time, txid, time_pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
