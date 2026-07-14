/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionApi.js">
*   Copyright (c) 2022 Aspose.HTML for Cloud
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

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ApiClient', 'api/StorageApi', 'model/PdfMetadata'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../ApiClient'),
            require('../api/StorageApi'),
            require('../model/PdfMetadata')
        );
    } else {
        // Browser globals (root is window)
        if (!root.Asposehtmlcloud) {
            root.Asposehtmlcloud = {};
        }
        root.Asposehtmlcloud.ConversionApi = factory(
            root.Asposehtmlcloud.ApiClient,
            root.Asposehtmlcloud.StorageApi,
            root.Asposehtmlcloud.PdfMetadata
        );
    }
}(this, function (ApiClient, StorageApi, PdfMetadata) {
    'use strict';

    /**
     * Conversion service.
     * @module api/ConversionApi
     * @version 22.12.1
     */

    /**
     * Constructs a new ConversionApi.
     * @alias module:api/ConversionApi
     * @class
     * @param {Object} conf  API client configuration implementation to use
     */
    var exports = function(conf) {

        this.apiClient = ApiClient.instance;
        this.apiClient.setConfig(conf);
        this.storageApi = new StorageApi(conf);
        this.fs = require('fs');
        this.path = require('path');


        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convertLocalToLocal
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the HTML, EPUB from the local file to the local file.
         * @param {String} src Full path to the input file (html, epub formats) in the local disk. (required)
         * @param {String} dst Resulting full path to the result file on the local disk. (required)
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convertLocalToLocal = function(src, dst, options, callback){
            this.convert(src, dst, true, true, false, options, "", callback);
        }

        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convert
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the HTML, EPUB from the local file to the user's storage.
         * @param {String} src Full path to the input file (html, epub formats) on the local disk. (required)
         * @param {String} dst Resulting full path to the result file on the storage. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convertLocalToStorage = function(src, dst, storage, options, callback){
            this.convert(src, dst, true, false, false, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convert
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the HTML, EPUB from the user's storage to the local file.
         * @param {String} src Full path to the input file (html, epub formats) on the storage. (required)
         * @param {String} dst Resulting full path to the result file on the local disk. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convertStorageToLocal = function(src, dst, storage, options, callback){
            this.convert(src, dst, false, true, false, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convert
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the HTML, EPUB from the user's storage to the storage.
         * @param {String} src Full path to the input file (html, epub formats) on the storage. (required)
         * @param {String} dst Resulting full path to the result file on the storage. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convertStorageToStorage = function(src, dst, storage, options, callback){
            this.convert(src, dst, false, false, false, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convert
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the website to the local file.
         * @param {String} src Url of the website. (required)
         * @param {String} dst Resulting full path to the result file on the local disk. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convertUrlToLocal = function(src, dst, options, callback){
            this.convert(src, dst, false, true, true, options, "", callback);
        }

        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convert
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the website to the user's storage.
         * @param {String} src Url of the website. (required)
         * @param {String} dst Resulting full path to the result file on the user's storage. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convertUrlToStorage = function(src, dst, storage, options, callback){
            this.convert(src, dst, false, false, true, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the convert operation.
         * @callback module:api/ConversionApi~convert
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of conversion.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converting the HTML, EPUB, or website from specific places to the specified format.
         * @param {String} src Full path to the input file or URL for conversion(html, epub formats). (required)
         * @param {String} dst Resulting full path to the result file. (required)
         * @param {Boolean} srcInLocal True if the source file in a local directory. (required)
         * @param {Boolean} dstInLocal True if the result needs to save to a local directory. (required)
         * @param {Boolean} isUrl True if source file is URL. (required)
         * @param {Object} options Conversion options. (optional)
         * @param {Number} options.width Resulting width in pixels. (optional)
         * @param {Number} options.height Resulting height in pixels. (optional)
         * @param {Number} options.leftMargin Left resulting margin in pixels. (optional)
         * @param {Number} options.rightMargin Right resulting margin in pixels. (optional)
         * @param {Number} options.topMargin Top resulting margin in pixels. (optional)
         * @param {Number} options.bottomMargin Bottom resulting margin in pixels. (optional)
         * @param {Number} options.resolution DPI for rendered image output (PNG, JPEG, BMP, GIF, TIFF, WEBP). Default 96. Ignored for non-image outputs. (optional)
         * @param {String} options.pageSize Named page size (e.g. "A4", "Letter"). (optional)
         * @param {String} options.background CSS background color like '#FF0000'. For conversion from SVG only. (optional)
         * @param {Number} options.jpegQuality JPEG quality in percent. (optional)
         * @param {module:model/PdfMetadata|Object} options.pdfMetadata Optional PDF /Info dictionary metadata. Only meaningful when converting to PDF; silently ignored for other output formats. Any of: title, author, subject, keywords, creator, producer, creationDate, modificationDate. Unset fields keep engine defaults. (optional)
         * @param {String} storage Name of the storage. (optional)
         * @param {module:api/ConversionApi~convert} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.convert = function (src, dst, srcInLocal, dstInLocal, isUrl, options, storage, callback) {
            options = options || {};
            storage = storage || "";

            // pdfMetadata is a top-level property of ConversionRequest, not part of
            // the `options` dictionary. Extract it from the caller-supplied options
            // bag (a convenient place for JS callers to put it) and serialize with
            // null-omit semantics so unset fields aren't sent as null.
            var pdfMetadata = PdfMetadata.serialize(options.pdfMetadata);
            if (options.pdfMetadata !== undefined) {
                // Rebuild options without pdfMetadata so it isn't sent under `options`.
                var cleaned = {};
                for (var k in options) {
                    if (Object.prototype.hasOwnProperty.call(options, k) && k !== 'pdfMetadata') {
                        cleaned[k] = options[k];
                    }
                }
                options = cleaned;
            }

            if (src === undefined || src === null) {
                throw new Error("Missing the required parameter 'source'");
            }

            if (dst === undefined || dst === null) {
                throw new Error("Missing the required parameter 'destination'");
            }


            var outFile, ext, inputFormat, outputFormat, pathParams, postBody;

            outFile = this.path.parse(dst).base;

            if(!dstInLocal){
                outFile = dst;
            }

            inputFormat = 'html';

            if(!isUrl) {
                ext = src.split('.').pop().toLowerCase();
                switch (ext) {
                    case 'html':
                    case 'htm':
                        inputFormat = 'html';
                        break;
                    case 'mht':
                    case 'mhtml':
                        inputFormat = 'mhtml';
                        break;
                    case 'jpg':
                        inputFormat ='jpeg';
                        break;
                    case 'tif':
                        inputFormat = 'tiff';
                        break;
                    default:
                        inputFormat = ext;
                }
            }

            outputFormat = dst.split('.').pop().toLowerCase();

            if(outputFormat === 'jpg'){
                outputFormat = 'jpeg';
            } else if(outputFormat === 'mht') {
                outputFormat = 'mhtml';
            } else if (outputFormat === 'tif') {
                outputFormat = 'tiff';
            }

            pathParams = {
                'from': inputFormat,
                'to': outputFormat
            };

            if(srcInLocal) {
                var file = this.fs.createReadStream(this.path.normalize(src));
                this.storageApi.uploadFile("/", file, { 'storageName': "" }, (err, data, resp) => {
                    if(err || resp.status !== 200 || data.errors.length !== 0 ||  data.uploaded.length !== 1) {
                        throw new Error("Unable to upload file");
                    }
                    postBody = {inputPath: data.uploaded[0], outputFile: outFile};
                    if(storage) {
                        postBody['StorageName'] = storage;
                    }
                    if(options && Object.keys(options).length > 0) {
                        postBody['options'] = options;
                    }
                    if(pdfMetadata) {
                        postBody['pdfMetadata'] = pdfMetadata;
                    }

                    this.createConversion(pathParams, postBody, dstInLocal, dst, storage, callback);

                });
            } else {
                postBody = {inputPath: src, outputFile: outFile};
                if(storage) {
                    postBody['StorageName'] = storage;
                }
                if(options && Object.keys(options).length > 0) {
                    postBody['options'] = options;
                }
                if(pdfMetadata) {
                    postBody['pdfMetadata'] = pdfMetadata;
                }

                this.createConversion(pathParams, postBody, dstInLocal, dst, storage, callback);
            }
        };

        this.createConversion = function(pathParams, postBody, dstInLocal, dst, storage, callback){

            this.apiClient.callApi(
                '/html/conversion/{from}-{to}', 'POST',
                pathParams, {}, {}, {}, postBody,
                ['application/json'], ['application/json'], 'OperationResult', (err, data, resp) =>
                {
                    if(err || resp.status !== 200) {
                        throw new Error("Unable to create a conversion task");
                    }
                    this.checkStatus(data.id, (err, data, resp) => {
                        if(err || resp.status !== 200) {
                            throw new Error("Unable to upload result file from storage");
                        }
                        if(dstInLocal) {
                            this.storageApi.downloadFile(data.file, {'versionId' : null, 'storageName': storage}, (err1, data1, resp1) => {
                                if(err || resp.status !== 200) {
                                    throw new Error("Unable to download file from the storage");
                                }
                                var dirname = this.path.dirname(dst);
                                var filename = this.path.basename(data.file);
                                var fullPath = dirname + "/" + filename;
                                var fd = this.fs.openSync(fullPath, 'w');
                                this.fs.writeSync(fd, data1);
                                data.file = fullPath;
                                callback(err, data, resp);
                            });
                        } else {
                            callback(err, data, resp);
                        }
                    });
                }
            );
        };

        this.checkStatus = function(id, callback){
            this.apiClient.callApi(
                'html/conversion/{id}', 'GET',
                {id: id}, {}, {}, {}, "",
                ['application/json'], ['application/json'], 'OperationResult', (err, data, resp) =>
                {
                    if(!err || resp.status !== 200) {
                        switch (data.status) {
                            case "running":
                            case "pending":
                                var self = this;
                                setTimeout(function () {
                                    self.checkStatus(id, callback);
                                }, 3000);
                                break;
                            case 'completed':
                                callback(err, data, resp);
                                break;
                            default:
                                throw new Error('Conversion status is ' + data.status);
                        }
                    } else {
                        throw new Error('Conversion status is ' + data.status);
                    }
                }
            );
        }
    };

    return exports;
}));
