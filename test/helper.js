/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="helper.js">
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Asposehtmlcloud);
  }
}(this, function(expect, Asposehtmlcloud) {

'use strict';
    // Credentials come from the environment so CI (or the SDK test agent) can
    // run against its own subscription; the literals stay as a local fallback.
    function cred(names, fallback) {
        for (var i = 0; i < names.length; i++) {
            if (process.env[names[i]]) { return process.env[names[i]]; }
        }
        return fallback;
    }

    var conf = {
        "basePath":"https://api.aspose.cloud/v4.0",
        "authPath":"https://api.aspose.cloud/connect/token",
        "apiKey":cred(["ASPOSE_CLIENT_SECRET", "APP_KEY"], "c8dda7d6445d82635b8797d1c8edd153"),
        "appSID":cred(["ASPOSE_CLIENT_ID", "APP_SID"], "2225baa2-097b-4731-9831-d0d56c28230f"),
        // "basePath":"http://localhost:5000/v4.0",
        // "authPath":"https://api-qa.aspose.cloud/connect/token",
        // "apiKey":"html.cloud",
        // "appSID":"html.cloud",

        "testResult":"/testresult/",
        "testData":"/testdata/",
        "remoteFolder":"HtmlTestDoc",
        "defaultUserAgent":"Webkit"
    };

    var fs = require('fs');
    var path = require('path');
    var local_dst_folder = __dirname + "/../"+ conf['testResult'];
    var local_src_folder = __dirname + "/../"+ conf['testData'];

    // The result directory is not kept in the repository, so create it here
    // instead of letting every conversion test fail on a missing path.
    fs.mkdirSync(local_dst_folder, { recursive: true });

// Get  api
    var api = new Asposehtmlcloud.StorageApi(conf);

    exports.conf = conf;

exports.saveToTestFolder = function (filename, buffer){

    var dst = local_dst_folder + "/" + filename;
    var fd = fs.openSync(dst, 'w');
    return fs.writeSync(fd, buffer);
};

exports.uploadFileToStorage = function(filename, uploadFolder, callback){
    var folder = uploadFolder || conf['remoteFolder'];
    var opts = { 'storageName': null };
    var file = fs.createReadStream(path.normalize(local_src_folder + "/" + filename));
    api.uploadFile(folder, file, opts, callback);
};

exports.getFileSize = function(filename){
  var stats = fs.statSync(local_src_folder + "/" + filename);
  return stats.size;
};
}));