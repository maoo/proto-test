# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [contacts.proto](#contacts.proto)
    - [Contact](#org.finos.fo.Contact)
    - [Contact.Id](#org.finos.fo.Contact.Id)
    - [ContactList](#org.finos.fo.ContactList)





- [country.proto](#country.proto)
    - [Country](#org.finos.fo.Country)
    - [Country.Id](#org.finos.fo.Country.Id)





- [instruments.proto](#instruments.proto)
    - [Instrument](#org.finos.fo.Instrument)
    - [Instrument.Id](#org.finos.fo.Instrument.Id)
    - [InstrumentList](#org.finos.fo.InstrumentList)





- [organization.proto](#organization.proto)
    - [Organization](#org.finos.fo.Organization)
    - [Organization.Id](#org.finos.fo.Organization.Id)





- [portfolio.proto](#portfolio.proto)
    - [Portfolio](#org.finos.fo.Portfolio)
    - [Portfolio.Id](#org.finos.fo.Portfolio.Id)
    - [Position](#org.finos.fo.Position)





- [Scalar Value Types](#scalar-value-types)



<a name="contacts.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## contacts.proto



<a name="org.finos.fo.Contact"></a>

### Contact







<a name="org.finos.fo.Contact.Id"></a>

### Contact.Id



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| twitter | [string](#string) |  |  |
| phone | [string](#string) |  |  |






<a name="org.finos.fo.ContactList"></a>

### ContactList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contacts | [Contact](#org.finos.fo.Contact) | repeated |  |















<a name="country.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## country.proto



<a name="org.finos.fo.Country"></a>

### Country



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="org.finos.fo.Country.Id"></a>

### Country.Id



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ISOALPHA2 | [string](#string) |  |  |
| ISOALPHA3 | [string](#string) |  |  |















<a name="instruments.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## instruments.proto



<a name="org.finos.fo.Instrument"></a>

### Instrument



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="org.finos.fo.Instrument.Id"></a>

### Instrument.Id



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ticker | [string](#string) |  |  |
| ISIN | [string](#string) |  |  |
| CUSIP | [string](#string) |  |  |
| SEDOL | [string](#string) |  |  |
| RIC | [string](#string) |  |  |
| BBG | [string](#string) |  |  |
| PERMID | [string](#string) |  |  |
| FIGI | [string](#string) |  |  |






<a name="org.finos.fo.InstrumentList"></a>

### InstrumentList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| instruments | [Instrument](#org.finos.fo.Instrument) | repeated |  |















<a name="organization.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## organization.proto



<a name="org.finos.fo.Organization"></a>

### Organization



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="org.finos.fo.Organization.Id"></a>

### Organization.Id



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| LEI | [string](#string) |  |  |
| PERMID | [string](#string) |  |  |















<a name="portfolio.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## portfolio.proto



<a name="org.finos.fo.Portfolio"></a>

### Portfolio



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| positions | [Position](#org.finos.fo.Position) | repeated |  |






<a name="org.finos.fo.Portfolio.Id"></a>

### Portfolio.Id



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| portfolioId | [string](#string) |  |  |






<a name="org.finos.fo.Position"></a>

### Position



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| instrument | [Instrument](#org.finos.fo.Instrument) |  |  |
| holding | [int64](#int64) |  |  |















## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |
