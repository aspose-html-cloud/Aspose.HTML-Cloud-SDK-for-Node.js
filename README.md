# Aspose.Html Cloud Node.js SDK
[Aspose.Html Cloud](https://products.aspose.cloud/html) is a true [REST API](https://apireference.aspose.cloud/html/) that enables you to perform a wide range of html processing operations including manipulation and conversion in the cloud, with zero initial costs. Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to process html pages in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights. 

- API version: 22.12.1
- Package version: 22.12.1


### Possible conversions: 
- HTML -> PDF, XPS, DOCX, MD, MHTML, JPEG, BMP, PNG, TIFF, GIF, WebP
- EPUB -> PDF, XPS, DOCX, JPEG, BMP, PNG, TIFF, GIF, WebP
- MD -> PDF, XPS, DOCX, HTML, MHTML, JPEG, BMP, PNG, TIFF, GIF
- MHTML -> PDF, XPS, DOCX, JPEG, BMP, PNG, TIFF, GIF
- SVG -> PDF, XPS, JPEG, BMP, PNG, TIFF, GIF
- JPEG, BMP, PNG, TIFF, GIF -> SVG


## Installation

### Aspose.HTML Cloud SDK for Node.js
This repository contains Aspose.HTML Cloud SDK for Node.js source code. 
This SDK allows you to work with Aspose.HTML Cloud REST APIs in your Node.js applications quickly and easily.

See [API Reference](https://apireference.aspose.cloud/html/) for full API specification.

### How to use the SDK?
The complete source code is available in this repository folder, you can either directly use 
it in your project via npm package manager.

### Prerequisites
To use Aspose HTML for Cloud Node.js SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is a free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

#### Install Aspose.HTML Cloud 
### For [Node.js](https://nodejs.org/)

#### npm
```shell
npm install @asposecloud/aspose-html-cloud --save
```

#### git
Install it via:
```shell
    npm install https://github.com/aspose-html-cloud/aspose-html-cloud-nodejs --save
```

## Getting Started

1. **Sign Up**. Before you begin, you need to sign up for an account on our [Dashboard](https://dashboard.aspose.cloud/) and retrieve your [credentials](https://dashboard.aspose.cloud/#/apps).
2. **Minimum requirements**. This SDK requires [Node.js 6.x and higher](https://nodejs.org/download/release/).
3. **Install Aspose.Html Cloud Node.js SDK**.

Please, add the following [nmp package](https://www.npmjs.com/package/@asposecloud/aspose-html-cloud) to your project.json as a dependency.
```json
{
  "dependencies": {
    "@asposecloud/aspose-html-cloud":"^22.12.1"
  }
}
```

Please follow the [installation](#Installation) instruction and execute the following JS code:   

NOTE: Use the helper from /test/helper.js for an upload and save data.

```javascript

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Conversion Api object
var conversionApi = new api.ConversionApi(conf);


var src = "/path/to/src/test.html"; // {String} Source document.
var dst = "/path/to/dst/test.jpeg"; // {String} Result document.


//Setup various option for result image
var opts = {
  'width': 800, // {Number} Resulting image width in pixels.
  'height': 1000, // {Number} Resulting image height in pixels.
  'leftMargin': 10, // {Number} Left resulting image margin in pixels.
  'rightMargin': 10, // {Number} Right resulting image margin in pixels.
  'topMargin': 20, // {Number} Top resulting image margin in pixels.
  'bottomMargin': 20 // {Number} Bottom resulting image margin in pixels.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

conversionApi.convertLocalToLocal(src, dst, opts, callback);

```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your package from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('@asposecloud/aspose-html-cloud')` in javascript files from the directory you ran the last 
command above from.


### For browser
The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration
Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

### Sample usage
Before fill all fields in configuration object (see tests)   

Example:   
```javascript
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
}
```

## Documentation for API Endpoints
All URIs are relative to *https://api.aspose.cloud/v4.0*

[Tests](./test/) contain various examples of using the Aspose.HTML SDK.

<a name="conversion_api"></a>
### CONVERSION API
- For conversion to images allowed formats is jpeg, png, bmp, tiff, gif. Input formats are html, epub, svg.

| Class                           | Method                                                                       | Description                                               |
|---------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------|
| *Asposehtmlcloud.ConversionApi* | [**convertLocalToLocal**](docs/ConversionApi.md#convertlocaltolocal)         | Convert a document from local disk to a local disk.       |
| *Asposehtmlcloud.ConversionApi* | [**convertLocalToStorage**](docs/ConversionApi.md#convertlocaltostorage)     | Convert a document from local disk to user's storage.     |
| *Asposehtmlcloud.ConversionApi* | [**convertStorageToLocal**](docs/ConversionApi.md#convertstoragetolocal)     | Convert a document from user's storage to local disk.     |
| *Asposehtmlcloud.ConversionApi* | [**convertStorageToStorage**](docs/ConversionApi.md#convertstoragetostorage) | Convert a document from user's storage to user's storage. |
| *Asposehtmlcloud.ConversionApi* | [**convertUrlToLocal**](docs/ConversionApi.md#converturltolocal)             | Convert the HTML document by URL to local disk.           |
| *Asposehtmlcloud.ConversionApi* | [**convertUrlToStorage**](docs/ConversionApi.md#converturltostorage)         | Convert the HTML document by URL to user's storage.       |
| *Asposehtmlcloud.ConversionApi* | [**convert**](docs/ConversionApi.md#convert)                                 | Convert a document to the specified format.               |


<a name="vectorization_api"></a>
### VECTORIZATION API

| Class                              | Method                                                                              | Description                                                   |
|------------------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| *Asposehtmlcloud.VectorizationApi* | [**vectorizeLocalToLocal**](docs/VectorizationApi.md#vectorizelocaltolocal)         | Vectorization an image from local disk to a local disk.       |
| *Asposehtmlcloud.VectorizationApi* | [**vectorizeLocalToStorage**](docs/VectorizationApi.md#vectorizelocaltostorage)     | Vectorization an image from local disk to user's storage.     |
| *Asposehtmlcloud.VectorizationApi* | [**vectorizeStorageToLocal**](docs/VectorizationApi.md#vectorizestoragetolocal)     | Vectorization an image from user's storage to local disk.     |
| *Asposehtmlcloud.VectorizationApi* | [**vectorizeStorageToStorage**](docs/VectorizationApi.md#vectorizestoragetostorage) | Vectorization an image from user's storage to user's storage. |
| *Asposehtmlcloud.VectorizationApi* | [**vectorize**](docs/VectorizationApi.md#vectorize)                                 | Vectorization an image to the specified format.               |

<a name="storage_api"></a>
## STORAGE API   

| Class                        | Method                                                | HTTP request                        | Description                               |
|------------------------------|-------------------------------------------------------|-------------------------------------|-------------------------------------------|
| *Asposehtmlcloud.StorageApi* | [**deleteFile**](docs/FileApi.md#deletefile)          | **DELETE** /html/file               | Delete file                               |
| *Asposehtmlcloud.StorageApi* | [**downloadFile**](docs/FileApi.md#downloadfile)      | **GET** /html/file                  | Download file                             |
| *Asposehtmlcloud.StorageApi* | [**uploadFile**](docs/FileApi.md#uploadfile)          | **POST** /html/file                 | Upload file                               |
| *Asposehtmlcloud.StorageApi* | [**createFolder**](docs/FolderApi.md#createfolder)    | **POST** /html/folder               | Create the folder                         |
| *Asposehtmlcloud.StorageApi* | [**deleteFolder**](docs/FolderApi.md#deletefolder)    | **DELETE** /html/folder             | Delete folder                             |
| *Asposehtmlcloud.StorageApi* | [**getFilesList**](docs/FolderApi.md#getfileslist)    | **GET** /html/folder                | Get all files and folders within a folder |
| *Asposehtmlcloud.StorageApi* | [**getDiscUsage**](docs/StorageApi.md#getdiscusage)   | **GET** /html/storage/disc          | Get disc usage                            |
| *Asposehtmlcloud.StorageApi* | [**objectExists**](docs/StorageApi.md#objectexists)   | **GET** /html/storage/exist         | Check if file or folder exists            |
| *Asposehtmlcloud.StorageApi* | [**storageExists**](docs/StorageApi.md#storageexists) | **GET** /html/storage/exist/storage | Check if storage exists                   |

## Documentation for Models

 - [Asposehtmlcloud.OperationResult](docs/OperationResult.md)
 - [Asposehtmlcloud.DiscUsage](docs/DiscUsage.md)
 - [Asposehtmlcloud.Error](docs/Error.md)
 - [Asposehtmlcloud.ErrorDetails](docs/ErrorDetails.md)
 - [Asposehtmlcloud.FileVersion](docs/FileVersion.md)
 - [Asposehtmlcloud.FileVersions](docs/FileVersions.md)
 - [Asposehtmlcloud.FilesList](docs/FilesList.md)
 - [Asposehtmlcloud.FilesUploadResult](docs/FilesUploadResult.md)
 - [Asposehtmlcloud.ObjectExist](docs/ObjectExist.md)
 - [Asposehtmlcloud.StorageExist](docs/StorageExist.md)
 - [Asposehtmlcloud.StorageFile](docs/StorageFile.md)

## Run tests
```shell
node.exe ./node_modules/mocha/bin/_mocha --ui bdd ./test
```


## Documentation for Authorization

Please follow the [installation](#installation) instruction for write config file.
