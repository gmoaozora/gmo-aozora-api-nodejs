/**
 * GMO Aozora Net Bank Open API
 * <p>Ph2.5向けに作成したもの</p> 
 *
 * OpenAPI spec version: 1.1.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GmoAozoraNetBankOpenApi) {
      root.GmoAozoraNetBankOpenApi = {};
    }
    root.GmoAozoraNetBankOpenApi.EventType = factory(root.GmoAozoraNetBankOpenApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EventType model module.
   * @module model/EventType
   * @version 1.1.10
   */

  /**
   * Constructs a new <code>EventType</code>.
   * @alias module:model/EventType
   * @class
   * @param eventType {String} イベント種別 半角英数記号文字 va-deposit-transaction = 振込入金口座への入金明細通知 
   */
  var exports = function(eventType) {
    var _this = this;

    _this['eventType'] = eventType;
  };

  /**
   * Constructs a <code>EventType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventType} obj Optional instance to populate.
   * @return {module:model/EventType} The populated <code>EventType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
      }
    }
    return obj;
  }

  /**
   * イベント種別 半角英数記号文字 va-deposit-transaction = 振込入金口座への入金明細通知 
   * @member {String} eventType
   */
  exports.prototype['eventType'] = undefined;



  return exports;
}));


