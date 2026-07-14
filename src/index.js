/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="index.js">
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

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ApiClient',
            'api/ConversionApi',
            'api/VectorizationApi',
            'api/StorageApi',
            'model/PdfMetadata'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('./ApiClient'),
            require('./api/ConversionApi'),
            require('./api/VectorizationApi'),
            require('./api/StorageApi'),
            require('./model/PdfMetadata')
        );
    }
}(function (ApiClient, ConversionApi, VectorizationApi, StorageApi, PdfMetadata) {
    'use strict';

    /**
     * Aspose.HTML Cloud SDK for Javascript source code..<br>
     * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
     * <p>
     * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
     * <pre>
     * var Asposehtmlcloud = require('index'); // See note below*.
     * var xxxSvc = new Asposehtmlcloud.XxxApi(); // Allocate the API class we're going to use.
     * var yyyModel = new Asposehtmlcloud.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
     * and put the application logic within the callback function.</em>
     * </p>
     * <p>
     * A non-AMD browser application (discouraged) might do something like this:
     * <pre>
     * var xxxSvc = new Asposehtmlcloud.XxxApi(); // Allocate the API class we're going to use.
     * var yyy = new Asposehtmlcloud.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * </p>
     * @module index
     * @version 22.12.1
     */
    var exports = {
        /**
         * The ApiClient constructor.
         * @property {module:ApiClient}
         */
        ApiClient: ApiClient,

        /**
         * The ConversionApi service constructor.
         * @property {module:api/ConversionApi}
         */
        ConversionApi: ConversionApi,

        /**
         * The VectorizationApi service constructor.
         * @property {module:api/VectorizationApi}
         */
        VectorizationApi: VectorizationApi,

        /**
         * The StorageApi service constructor.
         * @property {module:api/StorageApi}
         */
        StorageApi: StorageApi,

        /**
         * The PdfMetadata model constructor. Represents PDF /Info dictionary
         * metadata that can be attached to a ConversionRequest for PDF output.
         * @property {module:model/PdfMetadata}
         */
        PdfMetadata: PdfMetadata

    };

    return exports;
}));
