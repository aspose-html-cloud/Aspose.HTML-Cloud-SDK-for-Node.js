# PdfMetadata

Represents PDF document information (`/Info` dictionary) metadata attached to
a conversion request. Applies to **PDF output only** and is silently ignored
for all other output formats.

All fields are optional. Any field that is unset (`undefined` or `null`) is
omitted from the request and the rendering engine default is used.

`PdfMetadata` is a **top-level property** of the conversion request body
(sibling of `options`). For convenience, the Node.js SDK also accepts it as an
`options.pdfMetadata` property and moves it to the correct place before
sending.

## Fields

| Field                | Type    | PDF /Info key    | Engine default                     | Note     |
|----------------------|---------|------------------|------------------------------------|----------|
| **title**            | String  | `/Title`         | `"Aspose"`                         | Optional |
| **author**           | String  | `/Author`        | `"Aspose"`                         | Optional |
| **subject**          | String  | `/Subject`       | `"Aspose"`                         | Optional |
| **keywords**         | String  | `/Keywords`      | `""`                               | Optional |
| **creator**          | String  | `/Creator`       | `"Aspose"`                         | Optional |
| **producer**         | String  | `/Producer`      | `"Aspose.HTML for .NET <version>"` | Optional |
| **creationDate**     | Date / String (ISO 8601) | `/CreationDate` | Current timestamp     | Optional |
| **modificationDate** | Date / String (ISO 8601) | `/ModDate`      | Current timestamp     | Optional |

## Example - all fields

```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

var conversionApi = new Asposehtmlcloud.ConversionApi(conf);

var src = "/path/to/src/report.html";
var dst = "/path/to/dst/report.pdf";

var opts = {
    pdfMetadata: {
        title: "Monthly Report",
        author: "Jane Doe",
        subject: "Q3 Results",
        keywords: "report, q3, pdf",
        creator: "My Application",
        producer: "My Company",
        creationDate: new Date("2024-01-15T10:30:00Z"),
        modificationDate: new Date("2024-06-20T18:45:00Z")
    }
};

conversionApi.convertLocalToLocal(src, dst, opts, function (err, data, res) {
    if (err) { console.error(err); return; }
    console.log(data);
});
```

## Example - partial (only some fields)

Unspecified fields keep engine defaults.

```javascript
var opts = {
    pdfMetadata: {
        title: "My Document",
        author: "John Doe"
    }
};

conversionApi.convertUrlToLocal(
    "https://example.com/page.html",
    "/tmp/page.pdf",
    opts,
    function (err, data, res) { /* ... */ }
);
```

## Notes

- `pdfMetadata` is only meaningful when the output format is `pdf`. Passing it
  for other target formats has no effect.
- Unset fields are **omitted** from the JSON body (null-omit semantics), so
  they will not overwrite engine defaults with `null`.
- Date values may be supplied as either JavaScript `Date` objects (recommended)
  or pre-formatted ISO 8601 strings.
