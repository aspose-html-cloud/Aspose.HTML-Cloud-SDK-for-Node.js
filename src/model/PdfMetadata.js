/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="PdfMetadata.js">
*   Copyright (c) 2026 Aspose.HTML for Cloud
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
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
    if (!root.AsposehtmlCloudApiReference) {
      root.AsposehtmlCloudApiReference = {};
    }
    root.AsposehtmlCloudApiReference.PdfMetadata = factory(root.AsposehtmlCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PdfMetadata model module.
   * Represents PDF document information (/Info dictionary) metadata that will
   * be embedded into the produced PDF file.
   *
   * All fields are optional. Fields set to null or omitted will keep the
   * rendering engine defaults.
   *
   * Applies to PDF output only. Ignored for all non-PDF output formats.
   *
   * @module model/PdfMetadata
   * @version 4.0
   */

  /**
   * Constructs a new <code>PdfMetadata</code>.
   * @alias module:model/PdfMetadata
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PdfMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * Only defined (non-null / non-undefined) properties are copied so that unset
   * fields are not serialized (null-omit semantics).
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfMetadata} obj Optional instance to populate.
   * @return {module:model/PdfMetadata} The populated <code>PdfMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title') && data['title'] != null)
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('author') && data['author'] != null)
        obj.author = ApiClient.convertToType(data['author'], 'String');
      if (data.hasOwnProperty('subject') && data['subject'] != null)
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('keywords') && data['keywords'] != null)
        obj.keywords = ApiClient.convertToType(data['keywords'], 'String');
      if (data.hasOwnProperty('creator') && data['creator'] != null)
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('producer') && data['producer'] != null)
        obj.producer = ApiClient.convertToType(data['producer'], 'String');
      if (data.hasOwnProperty('creationDate') && data['creationDate'] != null)
        obj.creationDate = ApiClient.convertToType(data['creationDate'], 'Date');
      if (data.hasOwnProperty('modificationDate') && data['modificationDate'] != null)
        obj.modificationDate = ApiClient.convertToType(data['modificationDate'], 'Date');
    }
    return obj;
  }

  /**
   * Strips undefined/null fields from a plain object representation of PdfMetadata
   * so the JSON body sent to the server omits unset fields.
   * Date fields are converted to ISO-8601 strings.
   *
   * @param {Object} data Raw pdfMetadata object supplied by the caller.
   * @return {Object|undefined} A new object containing only the fields that
   *   are actually set, or undefined if nothing is set.
   */
  exports.serialize = function(data) {
    if (!data) return undefined;

    var out = {};
    var fields = ['title', 'author', 'subject', 'keywords', 'creator', 'producer'];
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (data[f] !== undefined && data[f] !== null) {
        out[f] = String(data[f]);
      }
    }

    if (data.creationDate !== undefined && data.creationDate !== null) {
      out.creationDate = (data.creationDate instanceof Date)
        ? data.creationDate.toISOString()
        : String(data.creationDate);
    }
    if (data.modificationDate !== undefined && data.modificationDate !== null) {
      out.modificationDate = (data.modificationDate instanceof Date)
        ? data.modificationDate.toISOString()
        : String(data.modificationDate);
    }

    return Object.keys(out).length > 0 ? out : undefined;
  }

  /**
   * The document title. Maps to the PDF /Title entry.
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * The document author. Maps to the PDF /Author entry.
   * @member {String} author
   */
  exports.prototype.author = undefined;

  /**
   * The document subject. Maps to the PDF /Subject entry.
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * Comma-separated list of keywords. Maps to the PDF /Keywords entry.
   * @member {String} keywords
   */
  exports.prototype.keywords = undefined;

  /**
   * The name of the application that created the source document.
   * Maps to the PDF /Creator entry.
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * The name of the application that produced the PDF.
   * Maps to the PDF /Producer entry.
   * @member {String} producer
   */
  exports.prototype.producer = undefined;

  /**
   * The document creation date (ISO 8601). Maps to the PDF /CreationDate entry.
   * @member {Date} creationDate
   */
  exports.prototype.creationDate = undefined;

  /**
   * The document last modification date (ISO 8601). Maps to the PDF /ModDate entry.
   * @member {Date} modificationDate
   */
  exports.prototype.modificationDate = undefined;

  return exports;

}));
