## ConversionOptions

### PDFOptions
| Field            | Type   | Description                                                 | Note     |
|------------------|--------|-------------------------------------------------------------|----------|
| **width**        | Number | Width in inches                                             | Optional |
| **height**       | Number | Height in inches                                            | Optional |
| **leftmargin**   | Number | Left margin in inches                                       | Optional |
| **rightmargin**  | Number | Right margin in inches                                      | Optional |
| **topmargin**    | Number | Top margin in inches                                        | Optional |
| **bottommargin** | Number | Bottom margin in inches                                     | Optional |
| **jpegquality**  | Number | Quality in percent                                          | Optional |
| **background**   | String | CSS background like '#FF0000'. For conversion from SVG only | Optional |
| **pageSize**     | String | Named page size (e.g. "A4", "Letter")                       | Optional |

> **Tip:** For PDF output you may also attach document /Info metadata via a
> top-level [PdfMetadata](PdfMetadata.md) object on the conversion request.

### ImageOptions

 -  for JPEG, BMP, PNG, TIFF, GIF, WEBP formats

| Field            | Type   | Description                                                                                              | Note     |
|------------------|--------|----------------------------------------------------------------------------------------------------------|----------|
| **width**        | Number | Width in pixel                                                                                           | Optional |
| **height**       | Number | Height in pixel                                                                                          | Optional |
| **leftmargin**   | Number | Left margin in pixel                                                                                     | Optional |
| **rightmargin**  | Number | Right margin in pixel                                                                                    | Optional |
| **topmargin**    | Number | Top margin in pixel                                                                                      | Optional |
| **bottommargin** | Number | Bottom margin in pixel                                                                                   | Optional |
| **background**   | String | CSS background like '#FF0000'. For conversion from SVG only                                              | Optional |
| **resolution**   | Number | DPI for rendered image output. Default 96. Higher values produce larger pixel dimensions. Image formats only. | Optional |

### XPSOptions
| Field            | Type   | Description                                                  | Note     |
|------------------|--------|--------------------------------------------------------------|----------|
| **width**        | Number | Width in inches                                              | Optional |
| **height**       | Number | Height in inches                                             | Optional |
| **leftmargin**   | Number | Left margin in inches                                        | Optional |
| **rightmargin**  | Number | Right margin in inches                                       | Optional |
| **topmargin**    | Number | Top margin in inches                                         | Optional |
| **bottommargin** | Number | Bottom margin in inches                                      | Optional |
| **background**   | String | CSS background like '#FF0000'. For conversion from SVG only  | Optional |

### DocOptions
| Field            | Type   | Description                                                  | Note     |
|------------------|--------|--------------------------------------------------------------|----------|
| **width**        | Number | Width in inches                                              | Optional |
| **height**       | Number | Height in inches                                             | Optional |
| **leftmargin**   | Number | Left margin in inches                                        | Optional |
| **rightmargin**  | Number | Right margin in inches                                       | Optional |
| **topmargin**    | Number | Top margin in inches                                         | Optional |
| **bottommargin** | Number | Bottom margin in inches                                      | Optional |

### SvgOptions
| Field               | Type   | Description                                                                                             | Note     |
|---------------------|--------|---------------------------------------------------------------------------------------------------------|----------|
| **error_threshold** | Number | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | Optional |
| **max_iterations**  | Number | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | Optional |
| **colors_limit**    | Number | The maximum number of colors used to quantize an image. Default value is 25.                            | Optional |
| **line_width**      | Number | The value of this parameter is affected by the graphics scale. Default value is 1.                      | Optional |


### MarkdownOptions
| Field            | Type    | Description                                   | Note     |
|------------------|---------|-----------------------------------------------|----------|
| **usegit**       | Boolean | Use git flavor. True or False. Default false. | Optional |
