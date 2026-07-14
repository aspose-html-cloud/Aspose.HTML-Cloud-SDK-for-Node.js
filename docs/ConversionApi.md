# ConversionApi

All URIs are relative to *https://api.aspose.cloud/v4.0*

### Possible conversions:
- HTML -> PDF, XPS, DOCX, MD, MHTML, JPEG, BMP, PNG, TIFF, GIF
- EPUB -> PDF, XPS, DOCX, JPEG, BMP, PNG, TIFF, GIF
- MD -> PDF, XPS, DOCX, HTML, MHTML, JPEG, BMP, PNG, TIFF, GIF
- MHTML -> PDF, XPS, DOCX, JPEG, BMP, PNG, TIFF, GIF
- SVG -> PDF, XPS, JPEG, BMP, PNG, TIFF, GIF
- JPEG, BMP, PNG, TIFF, GIF -> SVG


| Method                                                  | Description                                               |
|---------------------------------------------------------|-----------------------------------------------------------|
| [**convertLocalToLocal**](#convertlocaltolocal)         | Convert a document from local disk to a local disk.       |
| [**convertLocalToStorage**](#convertlocaltostorage)     | Convert a document from local disk to user's storage.     |
| [**convertStorageToLocal**](#convertstoragetolocal)     | Convert a document from user's storage to local disk.     |
| [**convertStorageToStorage**](#convertstoragetostorage) | Convert a document from user's storage to user's storage. |
| [**convertUrlToLocal**](#converturltolocal)             | Convert the HTML document by URL to local disk.           |
| [**convertUrlToStorage**](#converturltostorage)         | Convert the HTML document by URL to user's storage.       |
| [**convert**](#convert)                                 | Convert  a document to the specified format.              |

## conversionOptions
| Options                                                     | Description                                       |
|-------------------------------------------------------------|---------------------------------------------------|
| [**PDFOptions**](ConversionOptions.md#PDFOptions)           | Convert to the PDF format.                        |
| [**ImageOptions**](ConversionOptions.md#ImageOptions)       | Convert to images (JPEG, PNG, GIF, TIFF, BMP).    |
| [**XPSOptions**](ConversionOptions.md#XPSOptions)           | Convert to the XPS format.                        |
| [**DocOptions**](ConversionOptions.md#DocOptions)           | Convert to the DOCX format.                       |
| [**SvgOptions**](ConversionOptions.md#SvgOptions)           | Trace images to the SVG format.                   |
| [**MarkdownOptions**](ConversionOptions.md#MarkdownOptions) | Convert the HTML document to the markdown format. |
| [**PdfMetadata**](PdfMetadata.md)                           | PDF /Info dictionary metadata for PDF output.     |

## convertLocalToLocal
> convertLocalToLocal(src, dst, opts, function (err, data, res);

Convert the HTML or EPUB document from a local disk to a local disk.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "/path/to/source/source.epub";
var dst = "/path/to/result/result.jpeg";
var opts = {
    'width': 600,
    'height': 800,
    'leftMargin': 10,
    'rightMargin': 20,
    'topMargin': 30,
    'bottomMargin': 40
};

apiInstance.convertLocalToLocal(src, dst, opts, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes      |
|------------------|--------------|--------------------------------------------------------------|------------|
| **src**          | **String**   | Full path to the source file.                                | html, epub |
| **dst**          | **String**   | Full path to the result file.                                |            |
| **options**      | **Object**   | Option for conversion.                                       | [optional] |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional] |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional] |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional] |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional] |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional] |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional] |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)

## convertLocalToStorage
> convertLocalToStorage(src, dst, storage, opts, function (err, data, res);

Convert the HTML or EPUB document from a local disk to a user's storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "/path/to/source/source.epub";
var dst = "/FolderInStorage/result.jpeg";
var opts = {
    'width': 600,
    'height': 800,
    'leftMargin': 10,
    'rightMargin': 20,
    'topMargin': 30,
    'bottomMargin': 40
};
var storage = "";

apiInstance.convertLocalToStorage(src, dst, storage, opts, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes      |
|------------------|--------------|--------------------------------------------------------------|------------|
| **src**          | **String**   | Full path to the source file on the local disk.              | html, epub |
| **dst**          | **String**   | Full path to the result file on the storage.                 |            |
| **storage**      | **String**   | Storage name. Empty string or null is default storage.       |            |
| **options**      | **Object**   | Option for conversion.                                       | [optional] |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional] |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional] |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional] |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional] |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional] |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional] |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)


## convertStorageToLocal
> convertStorageToLocal(src, dst, storage, opts, function (err, data, res);

Convert the HTML or EPUB document from a user's storage to a local disk.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "/FolderInStorage/source.html";
var dst = "/localPath/result.pdf";
var opts_A4 = {
    'width': 8.3,
    'height': 11.7,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2
};
var storage = "";

apiInstance.convertStorageToLocal(src, dst, storage, opts_A4, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes      |
|------------------|--------------|--------------------------------------------------------------|------------|
| **src**          | **String**   | Full path to the source file on the storage.                 | html, epub |
| **dst**          | **String**   | Full path to the result file on the local disk.              |            |
| **storage**      | **String**   | Storage name. Empty string or null is default storage.       |            |
| **options**      | **Object**   | Option for conversion.                                       | [optional] |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional] |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional] |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional] |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional] |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional] |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional] |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)


## convertStorageToStorage
> convertStorageToStorage(src, dst, storage, opts, function (err, data, res);

Convert the HTML or EPUB document from a user's storage to a local disk.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "/FolderOnStorage/source.html";
var dst = "/FolderOnStorage/result.xps";
var opts_A5 = {
    'width': 5.8,
    'height': 8.3,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2
};
var storage = "";

apiInstance.convertStorageToStorage(src, dst, storage, opts_A5, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes      |
|------------------|--------------|--------------------------------------------------------------|------------|
| **src**          | **String**   | Full path to the source file on the storage.                 | html, epub |
| **dst**          | **String**   | Full path to the result file on the storage.                 |            |
| **storage**      | **String**   | Storage name. Empty string or null is default storage.       |            |
| **options**      | **Object**   | Option for conversion.                                       | [optional] |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional] |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional] |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional] |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional] |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional] |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional] |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)


## convertUrlToLocal
> convertUrlToLocal(src, dst, opts, function (err, data, res);

Convert the website to a local disk.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var dst = "/localPath/result.pdf";
var opts_letter = {
    'width': 8.5,
    'height': 11.0,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2
};

apiInstance.convertUrlToLocal(src, dst, opts_letter, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes                    |
|------------------|--------------|--------------------------------------------------------------|--------------------------|
| **src**          | **String**   | Website's address.                                           | With http:// or https:// |
| **dst**          | **String**   | Full path to the result file on the local disk.              |                          |
| **options**      | **Object**   | Option for conversion.                                       | [optional]               |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional]               |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional]               |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional]               |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional]               |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional]               |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional]               |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)

## convertUrlToStorage
> convertUrlToStorage(src, dst, storage, opts, function (err, data, res);

Convert the website to the user's storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var dst = "/FolderOnStorage/result.xps";
var opts_A4 = {
    'width': 8.3,
    'height': 11.7,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2
};
var storage = "";

apiInstance.convertUrlToStorage(src, dst, storage, opts_A4, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes                    |
|------------------|--------------|--------------------------------------------------------------|--------------------------|
| **src**          | **String**   | Website's address.                                           | With http:// or https:// |
| **dst**          | **String**   | Full path to the result file on the storage.                 |                          |
| **storage**      | **String**   | Storage name. Empty string or null is default storage.       |                          |
| **options**      | **Object**   | Option for conversion.                                       | [optional]               |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional]               |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional]               |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional]               |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional]               |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional]               |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional]               |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)

## convert
> convert_api.convert(src, dst, srcInLocal, dstInLocal, isUrl, opts, storage, function (err, data, res);

General function for conversions.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var src = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var dst = "/FolderOnStorage/result.pdf";
var opts_A3 = {
    'width': 11.7,
    'height': 16.5,
    'leftMargin': 0.5,
    'rightMargin': 0.5,
    'topMargin': 0.5,
    'bottomMargin': 0.5
};
var storage = "";

apiInstance.convert(src, dst, false, false, true, opts_A3, storage, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name             | Type         | Description                                                  | Notes                    |
|------------------|--------------|--------------------------------------------------------------|--------------------------|
| **src**          | **String**   | Full path to the source.                                     | With http:// or https:// |
| **dst**          | **String**   | Full path to the result.                                     |                          |
| **srcInLocal**   | **Boolean**  | Source on the local disk.                                    |                          |
| **dstInLocal**   | **Boolean**  | Save result on the local disk.                               |                          |
| **isUrl**        | **Boolean**  | Source is url.                                               |                          |
| **storage**      | **String**   | Storage name. Empty string or null is default storage.       |                          |
| **options**      | **Object**   | Option for conversion.                                       | [optional]               |
| **width**        | **Number**   | Resulting width in pixels (PDF, XPS, DOCX in inches).        | [optional]               |
| **height**       | **Number**   | Resulting height in pixel (PDF, XPS, DOCX in inches).        | [optional]               |
| **leftMargin**   | **Number**   | Left resulting margin in pixel (PDF, XPS, DOCX in inches).   | [optional]               |
| **rightMargin**  | **Number**   | Right resulting margin in pixel (PDF, XPS, DOCX in inches).  | [optional]               |
| **topMargin**    | **Number**   | Top resulting margin in pixel (PDF, XPS, DOCX in inches).    | [optional]               |
| **bottomMargin** | **Number**   | Bottom resulting margin in pixel (PDF, XPS, DOCX in inches). | [optional]               |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                      |
|----------|-------------------------------------------|----------------------------------|
| **err**  | **String**                                | Error if conversion is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of conversion             |
| **res**  | **Object**                                | Http response for conversion API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#conversionapi)