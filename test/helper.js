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
    // Credentials are never stored in the repository. Set ASPOSE_CLIENT_ID and
    // ASPOSE_CLIENT_SECRET (or the APP_SID / APP_KEY aliases) before running
    // the suite; the SDK test agent does this automatically.
    function cred(names) {
        for (var i = 0; i < names.length; i++) {
            if (process.env[names[i]]) { return process.env[names[i]]; }
        }
        throw new Error("Missing Aspose Cloud credentials: set one of " +
                        names.join(" / ") + " in the environment.");
    }

    var conf = {
        "basePath":"https://api.aspose.cloud/v4.0",
        "authPath":"https://api.aspose.cloud/connect/token",
        "apiKey":cred(["ASPOSE_CLIENT_SECRET", "APP_KEY"]),
        "appSID":cred(["ASPOSE_CLIENT_ID", "APP_SID"]),
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