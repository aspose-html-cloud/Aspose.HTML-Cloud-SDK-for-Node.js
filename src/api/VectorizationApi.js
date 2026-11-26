/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="VectorizationApi.js">
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
        define(['ApiClient', 'api/StorageApi'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient') , require('../api/StorageApi'));
    } else {
        // Browser globals (root is window)
        if (!root.Asposehtmlcloud) {
            root.Asposehtmlcloud = {};
        }
        root.Asposehtmlcloud.VectorizationApi = factory(root.Asposehtmlcloud.ApiClient, root.Asposehtmlcloud.StorageApi);
    }
}(this, function (ApiClient, StorageApi) {
    'use strict';

    /**
     * Vectorization service.
     * @module api/VectorizationApi
     * @version 22.12.1
     */

    /**
     * Constructs a new VectorizationApi.
     * @alias module:api/VectorizationApi
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
         * Callback function to receive the result of the vectorize operation.
         * @callback module:api/VectorizationApi~vectorizeLocalToLocal
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of vectorization.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Vectorization an image to SVG format from the local file to the local file.
         * @param {String} src Full path to the input image in the local disk. (required)
         * @param {String} dst Resulting full path to the result file on the local disk. (required)
         * @param {Object} options Vectorization options. (optional)
         * @param {Number} options.error_threshold Maximum deviation of points to fitted curve. By default, it is 30. (optional)
         * @param {Number} options.max_iterations Number of iteration for least-squares approximation method. By default, it is 30. (optional)
         * @param {Number} options.colors_limit The maximum number of colors used to quantize an image. Default value is 25. (optional)
         * @param {Number} options.line_width The value of this parameter is affected by the graphics scale. Default value is 1. (optional)
         * @param {module:api/VectorizationApi~vectorize} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.vectorizeLocalToLocal = function(src, dst, options, callback){
            this.vectorize(src, dst, true, true, options, "", callback);
        }

        /**
         * Callback function to receive the result of the vectorize operation.
         * @callback module:api/VectorizationApi~vectorize
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of vectorization.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Vectorization an image to SVG format from the local file to the user's storage.
         * @param {String} src Full path to the input image on the local disk. (required)
         * @param {String} dst Resulting full path to the result file on the storage. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Vectorization options. (optional)
         * @param {Number} options.error_threshold Maximum deviation of points to fitted curve. By default, it is 30. (optional)
         * @param {Number} options.max_iterations Number of iteration for least-squares approximation method. By default, it is 30. (optional)
         * @param {Number} options.colors_limit The maximum number of colors used to quantize an image. Default value is 25. (optional)
         * @param {Number} options.line_width The value of this parameter is affected by the graphics scale. Default value is 1. (optional)
         * @param {module:api/VectorizationApi~vectorize} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.vectorizeLocalToStorage = function(src, dst, storage, options, callback){
            this.vectorize(src, dst, true, false, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the vectorize operation.
         * @callback module:api/VectorizationApi~vectorize
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of vectorization.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Vectorization an image to SVG format from the user's storage to the local file.
         * @param {String} src Full path to the input file (bmp, png, gif, jpeg, tiff formats) on the storage. (required)
         * @param {String} dst Resulting full path to the result file on the local disk. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Vectorization options. (optional)
         * @param {Number} options.error_threshold Maximum deviation of points to fitted curve. By default, it is 30. (optional)
         * @param {Number} options.max_iterations Number of iteration for least-squares approximation method. By default, it is 30. (optional)
         * @param {Number} options.colors_limit The maximum number of colors used to quantize an image. Default value is 25. (optional)
         * @param {Number} options.line_width The value of this parameter is affected by the graphics scale. Default value is 1. (optional)
         * @param {module:api/VectorizationApi~vectorize} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.vectorizeStorageToLocal = function(src, dst, storage, options, callback){
            this.vectorize(src, dst, false, true, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the vectorize operation.
         * @callback module:api/VectorizationApi~vectorize
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of vectorization.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Vectorization the HTML, EPUB from the user's storage to the storage.
         * @param {String} src Full path to the input file (html, epub formats) on the storage. (required)
         * @param {String} dst Resulting full path to the result file on the storage. (required)
         * @param {String} storage Name of the storage. For default storage the value is null.
         * @param {Object} options Vectorization options. (optional)
         * @param {Number} options.error_threshold Maximum deviation of points to fitted curve. By default, it is 30. (optional)
         * @param {Number} options.max_iterations Number of iteration for least-squares approximation method. By default, it is 30. (optional)
         * @param {Number} options.colors_limit The maximum number of colors used to quantize an image. Default value is 25. (optional)
         * @param {Number} options.line_width The value of this parameter is affected by the graphics scale. Default value is 1. (optional)
         * @param {module:api/VectorizationApi~vectorize} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.vectorizeStorageToStorage = function(src, dst, storage, options, callback){
            this.vectorize(src, dst, false, false, options, storage, callback);
        }

        /**
         * Callback function to receive the result of the vectorize operation.
         * @callback module:api/VectorizationApi~vectorize
         * @param {String} error Error message, if any.
         * @param {OperationResult} data The OperationResult object with results of vectorization.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Vectorization an image from specific places to the SVG format.
         * @param {String} src Full path to the input image file for vectorization. (required)
         * @param {String} dst Resulting full path to the result file. (required)
         * @param {Boolean} srcInLocal True if the source file in a local directory. (required)
         * @param {Boolean} dstInLocal True if the result needs to save to a local directory. (required)
         * @param {Object} options Vectorization options. (optional)
         * @param {Number} options.error_threshold Maximum deviation of points to fitted curve. By default, it is 30. (optional)
         * @param {Number} options.max_iterations Number of iteration for least-squares approximation method. By default, it is 30. (optional)
         * @param {Number} options.colors_limit The maximum number of colors used to quantize an image. Default value is 25. (optional)
         * @param {Number} options.line_width The value of this parameter is affected by the graphics scale. Default value is 1. (optional)
         * @param {String} storage Name of the storage. (optional)
         * @param {module:api/VectorizationApi~vectorize} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link OperationResult}
         */
        this.vectorize = function (src, dst, srcInLocal, dstInLocal, options, storage, callback) {

            options = options || {};
            storage = storage || "";

            if (src === undefined || src === null) {
                throw new Error("Missing the required parameter 'source'");
            }

            if (dst === undefined || dst === null) {
                throw new Error("Missing the required parameter 'destination'");
            }

            var outFile, ext, inputFormat, outputFormat, pathParams, postBody;

            outFile = this.path.parse(dst).base;

            if(!dstInLocal){
                outFile = ApiClient.toStorageOutputPath(dst);
            }

            ext = src.split('.').pop().toLowerCase();

            switch (ext) {
                case 'jpg':
                    inputFormat ='jpeg';
                    break;
                case 'tif':
                    inputFormat = 'tiff';
                    break;
                default:
                    inputFormat = ext;
            }

            outputFormat = dst.split('.').pop().toLowerCase();

            if(!['jpeg', 'tiff', 'bmp', 'png', 'gif'].includes(inputFormat)) {
                throw new Error("Input format must be an image");
            }

            if(outputFormat !== 'svg') {
                throw new Error("Output format must be SVG");
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
                    if(options) {
                        postBody['options'] = options;
                    }

                    this.createJob(pathParams, postBody, dstInLocal, dst, storage, callback);

                });
            } else {
                postBody = {inputPath: src, outputFile: outFile};
                if(storage) {
                    postBody['StorageName'] = storage;
                }
                if(options) {
                    postBody['options'] = options;
                }

                this.createJob(pathParams, postBody, dstInLocal, dst, storage, callback);
            }
        };

        this.createJob = function(pathParams, postBody, dstInLocal, dst, storage, callback){

            this.apiClient.callApi(
                '/html/conversion/{from}-{to}', 'POST',
                pathParams, {}, {}, {}, postBody,
                ['application/json'], ['application/json'], 'OperationResult', (err, data, resp) =>
                {
                    if(err || resp.status !== 200) {
                        throw new Error("Unable to create a vectorization task");
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
                                throw new Error('Vectorization status is ' + data.status);
                        }
                    } else {
                        throw new Error('Vectorization status is ' + data.status);
                    }
                }
            );
        }
    };

    return exports;
}));
