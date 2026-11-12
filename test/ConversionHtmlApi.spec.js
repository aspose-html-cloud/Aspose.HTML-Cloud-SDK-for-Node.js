/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionHtmlApi.spec.js">
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

var helper = require('./helper');

(function (root, factory) {
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
}(this, function (expect, Asposehtmlcloud) {
    'use strict';

    var convert_api, storage_api;
    var fs, path;
    var local_src_folder, local_dst_folder;

    before(function (done) {
        this.timeout(200000);
        convert_api = new Asposehtmlcloud.ConversionApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";
        done();
    });

    var getProperty = function (object, getter, property) {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]();
        else
            return object[property];
    };

    var setProperty = function (object, setter, property, value) {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value);
        else
            object[property] = value;
    };

    describe('ConversionHtmlApi', function () {
        this.timeout(1800000);

        describe('convertLocalToLocal', function () {
            it('should call convert local to local file successfully (html)', function (done) {

                var src = local_src_folder + "test_data.html";
                var dst = local_dst_folder + "LocalToLocal.jpeg";
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };

                convert_api.convertLocalToLocal(src, dst, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    expect(fs.existsSync(data.file)).to.be(true);
                    done();
                });
            });
        });

        describe('convertLocalToLocalMultiPageImage', function () {
            // A multi-page document converted to a raster format is returned as a zip
            // archive that must be named after the requested output file, e.g. testfile.png.zip.
            ['png', 'jpeg', 'bmp', 'gif'].forEach(function (fmt) {
                it('should return zip named after the output file for multi-page html to ' + fmt, function (done) {

                    var src = local_src_folder + "html_file_long.html";
                    var dst = local_dst_folder + "testfile." + fmt;
                    var opts = {
                        'width': 1000,
                        'height': 300,
                        'leftMargin': 10,
                        'rightMargin': 10,
                        'topMargin': 10,
                        'bottomMargin': 10
                    };

                    convert_api.convertLocalToLocal(src, dst, opts, function (err, data, res) {
                        try {
                            if (err) throw err;
                            expect(res.status).to.be(200);
                            expect(String(data.status).toLowerCase()).to.be('completed');
                            expect(fs.existsSync(data.file)).to.be(true);
                            expect(fs.statSync(data.file).size).to.be.greaterThan(0);
                            var name = path.basename(data.file).toLowerCase();
                            expect(name).to.contain('testfile.' + fmt + '.zip');
                            done();
                        } catch (e) {
                            done(e);
                        }
                    });
                });
            });
        });

        describe('convertLocalToStorage', function () {
            it('should call convert local to storage file successfully (html)', function (done) {

                var src = local_src_folder + "test_data.html";
                var dst = "FolderInStorage/LocalToStorage.tif";
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };

                convert_api.convertLocalToStorage(src, dst, "", opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    opts = {
                        'versionId': null,
                        'storageName': null
                    };

                    storage_api.objectExists(data.file, opts, (err, data, resp) => {
                        expect(200).to.be(resp.status);
                        expect(data.exists).to.be.ok();
                        expect(data.isFolder).to.not.be.ok();
                        done();
                    });
                });
            });
        });

        describe('convertStorageToLocal', function () {
            it('should call convert storage to local file successfully (html)', function (done) {

                var toUpload = local_src_folder + "test_data.html";
                var src = "FolderInStorage/test_data.html";
                var dst = local_dst_folder + "StorageToLocal.jpeg";
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };
                var file = fs.createReadStream(path.normalize(toUpload));

                storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                    if (err) throw err;

                    expect(200).to.be(res.status);
                    expect(0).to.be(data.errors.length);
                    expect(1).to.be(data.uploaded.length);

                    convert_api.convertStorageToLocal(src, dst, "", opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });
        });

        describe('convertStorageToStorage', function () {
            it('should call convert storage to storage file successfully (html)', function (done) {

                var toUpload = local_src_folder + "test_data.html";
                var src = "FolderInStorage/test_data.html";
                var dst = "FolderInStorage/StorageToStorage.pdf";
                var opts_A4 = {
                    'width': 8.3,
                    'height': 11.7,
                    'leftMargin': 0.2,
                    'rightMargin': 0.2,
                    'topMargin': 0.2,
                    'bottomMargin': 0.2
                };

                var file = fs.createReadStream(path.normalize(toUpload));

                storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                    if (err) throw err;

                    expect(200).to.be(res.status);
                    expect(0).to.be(data.errors.length);
                    expect(1).to.be(data.uploaded.length);

                    convert_api.convertStorageToStorage(src, dst, "", opts_A4, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        var opts = {
                            'versionId': null,
                            'storageName': null
                        };

                        storage_api.objectExists(dst, opts, (err, data, resp) => {
                            expect(200).to.be(resp.status);
                            expect(data.exists).to.be.ok();
                            expect(data.isFolder).to.not.be.ok();
                            done();
                        });
                    });
                });
            });
        });

        describe('convertUrlToLocal', function () {
            it('should call convert website to local file successfully (html)', function (done) {

                var src = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
                var dst = local_dst_folder + "WebsiteToLocal.pdf";
                var opts_A3 = {
                    'width': 11.7,
                    'height': 16.5,
                    'leftMargin': 0.2,
                    'rightMargin': 0.2,
                    'topMargin': 0.2,
                    'bottomMargin': 0.2
                };

                convert_api.convertUrlToLocal(src, dst, opts_A3, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    expect(fs.existsSync(data.file)).to.be(true);
                    done();
                });
            });
        });

        describe('convertUrlToStorage', function () {
            it('should call convert website to storage successfully (html)', function (done) {

                var src = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
                var dst = "FolderInStorage/WebsiteToStorage.pdf";
                var storage = null;
                var opts_A4 = {
                    'width': 8.3,
                    'height': 11.7,
                    'leftMargin': 0.2,
                    'rightMargin': 0.2,
                    'topMargin': 0.2,
                    'bottomMargin': 0.2
                };

                convert_api.convertUrlToStorage(src, dst, storage, opts_A4, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storageName': null
                    };

                    storage_api.objectExists(data.file, opts, (err, data, resp) => {
                        expect(200).to.be(resp.status);
                        expect(data.exists).to.be.ok();
                        expect(data.isFolder).to.not.be.ok();
                        done();
                    });
                });
            });
        });

        describe('convert', function () {
            it('should call convert successfully (html)', function (done) {

                var src = local_src_folder + "test_data.html";
                var dst = local_dst_folder + "GeneralConvert.jpeg";
                var storage = null;
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };

                convert_api.convert(src, dst, true, true, false, opts, storage, function (err, data, res) {
                    // err - error, data - Buffer, res - {"ok":true, "status":200, "type":"image/bmp...}
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    expect(fs.existsSync(data.file)).to.be(true);
                    done();
                });
            });
        });

    });
}));
