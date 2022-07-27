"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Data Types in Records",s={unversionedId:"understanding-airbyte/supported-data-types",id:"understanding-airbyte/supported-data-types",title:"Data Types in Records",description:"AirbyteRecords are required to conform to the Airbyte type system. This means that all sources must produce schemas and records within these types, and all destinations must handle records that conform to this type system.",source:"@site/../docs/understanding-airbyte/supported-data-types.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/supported-data-types",permalink:"/understanding-airbyte/supported-data-types",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/supported-data-types.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Namespaces",permalink:"/understanding-airbyte/namespaces"},next:{title:"Json to Avro Conversion for Blob Storage Destinations",permalink:"/understanding-airbyte/json-avro-conversion"}},l={},p=[{value:"The types",id:"the-types",level:2},{value:"Record structure",id:"record-structure",level:3},{value:"Nulls",id:"nulls",level:4},{value:"Unsupported types",id:"unsupported-types",level:4},{value:"Specific types",id:"specific-types",level:3},{value:"Dates and timestamps",id:"dates-and-timestamps",level:4},{value:"Unrepresentable numbers",id:"unrepresentable-numbers",level:4},{value:"Arrays",id:"arrays",level:4},{value:"Objects",id:"objects",level:4},{value:"Unions",id:"unions",level:4},{value:"Untyped values",id:"untyped-values",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-types-in-records"},"Data Types in Records"),(0,r.kt)("p",null,"AirbyteRecords are required to conform to the Airbyte type system. This means that all sources must produce schemas and records within these types, and all destinations must handle records that conform to this type system."),(0,r.kt)("p",null,"Because Airybet's interfaces are JSON-based, this type system is realized using ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON schemas"),". In order to work around some limitations of JSON schemas, schemas may declare an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_type")," annotation. This is used to disambiguate certain types that JSON schema does not explicitly differentiate between. See the ",(0,r.kt)("a",{parentName:"p",href:"#specific-types"},"specific types")," section for details."),(0,r.kt)("p",null,"This type system does not (generally) constrain values. Sources may declare streams using additional features of JSON schema (such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property for strings), but those constraints will be ignored by all other Airbyte components. The exception is in numeric types; ",(0,r.kt)("inlineCode",{parentName:"p"},"integer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," fields must be representable within 64-bit primitives."),(0,r.kt)("h2",{id:"the-types"},"The types"),(0,r.kt)("p",null,"This table summarizes the available types. See the ",(0,r.kt)("a",{parentName:"p",href:"#specific-types"},"Specific Types")," section for explanation of optional parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Airbyte type"),(0,r.kt)("th",{parentName:"tr",align:null},"JSON Schema"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "string"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"foo bar"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "string", "format": "date"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2021-01-23"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datetime with timezone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "string", "format": "date-time", "airbyte_type": "timestamp_with_timezone"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2022-11-22T01:23:45+05:00"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datetime without timezone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "string", "format": "date-time", "airbyte_type": "timestamp_without_timezone"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2022-11-22T01:23:45"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "integer"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"42"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Big integer (unrepresentable as a 64-bit two's complement int)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "string", "airbyte_type": "big_integer"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"12345678901234567890123456789012345678"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "number"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1234.56"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Big number (unrepresentable as a 64-bit IEEE 754 float)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "string", "airbyte_type": "big_number"}')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"1,000,000,...,000.1234"')," with 500 0's")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "array"}'),"; optionally ",(0,r.kt)("inlineCode",{parentName:"td"},"items")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"additionalItems")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type": "object"}'),"; optionally ",(0,r.kt)("inlineCode",{parentName:"td"},"properties")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"additionalProperties")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"foo": "bar"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Untyped (i.e. any value is valid)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"anyOf": [...]}')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'{"oneOf": [...]}')),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Note that some of these may be destination-dependent. For example, Snowflake ",(0,r.kt)("inlineCode",{parentName:"p"},"NUMERIC")," columns can be at most 38 digits wide, but Postgres ",(0,r.kt)("inlineCode",{parentName:"p"},"NUMERIC")," columns may have up to 131072 digits before the decimal point."),(0,r.kt)("h3",{id:"record-structure"},"Record structure"),(0,r.kt)("p",null,"As a reminder, sources expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command, which returns a list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/111131a193359027d0081de1290eb4bb846662ef/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L122"},(0,r.kt)("inlineCode",{parentName:"a"},"AirbyteStreams")),", and a ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," method, which emits a series of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/111131a193359027d0081de1290eb4bb846662ef/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L46-L66"},(0,r.kt)("inlineCode",{parentName:"a"},"AirbyteRecordMessages")),". The type system determines what a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," is for an ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStream"),", which in turn dictates what messages ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," is allowed to emit."),(0,r.kt)("p",null,"For example, a source could produce this ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStream")," (remember that the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," must declare ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": "object"')," at the top level):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "users",\n  "json_schema": {\n    "type": "object",\n    "properties": {\n      "username": {\n        "type": "string"\n      },\n      "age": {\n        "type": "integer"\n      },\n      "appointments": {\n        "type": "array",\n        "items": "string",\n        "airbyte_type": "timestamp_with_timezone"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Along with this ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteRecordMessage")," (observe that the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field conforms to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," from the stream):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stream": "users",\n  "data": {\n    "username": "someone42",\n    "age": 84,\n    "appointments": ["2021-11-22T01:23:45+00:00", "2022-01-22T14:00:00+00:00"]\n  },\n  "emitted_at": 1623861660\n}\n')),(0,r.kt)("p",null,"The top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," must conform to the type system. This ",(0,r.kt)("a",{parentName:"p",href:"#objects"},"means")," that all of the fields must also conform to the type system."),(0,r.kt)("h4",{id:"nulls"},"Nulls"),(0,r.kt)("p",null,"Many sources cannot guarantee that all fields are present on all records. As such, they may replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," entry in the schema with ",(0,r.kt)("inlineCode",{parentName:"p"},'["null", "the_real_type"]'),". For example, this schema is the correct way for a source to declare that the ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," field may be missing from some records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "username": {\n      "type": "string"\n    },\n    "age": {\n      "type": ["null", "integer"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This would then be a valid record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"username": "someone42"}\n')),(0,r.kt)("p",null,"Nullable fields are actually the more common case, but this document omits them in other examples for the sake of clarity."),(0,r.kt)("h4",{id:"unsupported-types"},"Unsupported types"),(0,r.kt)("p",null,"As an escape hatch, destinations which cannot handle a certain type should just fall back to treating those values as strings. For example, let's say a source discovers a stream with this schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "appointments": {\n      "type": "array",\n      "items": {\n        "type": "string",\n        "airbyte_type": "timestamp_with_timezone"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Along with records that look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"appointments": ["2021-11-22T01:23:45+00:00", "2022-01-22T14:00:00+00:00"]}\n')),(0,r.kt)("p",null,"The user then connects this source to a destination that cannot handle ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," fields. The destination connector should simply JSON-serialize the array back to a string when pushing data into the end platform. In other words, the destination connector should behave as though the source declared this schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "appointments": {\n      "type": "string"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"And emitted this record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"appointments": "[\\"2021-11-22T01:23:45+00:00\\", \\"2022-01-22T14:00:00+00:00\\"]"}\n')),(0,r.kt)("h3",{id:"specific-types"},"Specific types"),(0,r.kt)("h4",{id:"dates-and-timestamps"},"Dates and timestamps"),(0,r.kt)("p",null,"Airbyte has three temporal types: ",(0,r.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_with_timezone"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_without_timezone"),". These are represented as strings with specific ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," (either ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"date-time"),")."),(0,r.kt)("p",null,"However, JSON schema does not have a built-in way to indicate whether a field includes timezone information. For example, given the schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "created_at": {\n      "type": "string",\n      "format": "date-time",\n      "airbyte_type": "timestamp_with_timezone"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},'{"created_at": "2021-11-22T01:23:45+00:00"}')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'{"created_at": "2021-11-22T01:23:45"}')," are valid records. The ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_type")," annotation resolves this ambiguity; sources producing ",(0,r.kt)("inlineCode",{parentName:"p"},"date-time")," fields ",(0,r.kt)("strong",{parentName:"p"},"must")," set the ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_type")," to either ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_with_timezone")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_without_timezone"),"."),(0,r.kt)("h4",{id:"unrepresentable-numbers"},"Unrepresentable numbers"),(0,r.kt)("p",null,"64-bit integers and floating-point numbers (AKA ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),") cannot represent every number in existence. The ",(0,r.kt)("inlineCode",{parentName:"p"},"big_integer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"big_number")," types indicate that the source may produce numbers outside the ranges of ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),"s."),(0,r.kt)("p",null,"Note that these are declared as ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": "string"'),". This is intended to make parsing more safe by preventing accidental overflow/loss-of-precision."),(0,r.kt)("h4",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Arrays contain 0 or more items, which must have a defined type. These types should also conform to the type system. Arrays may require that all of their elements be the same type (",(0,r.kt)("inlineCode",{parentName:"p"},'"items": {whatever type...}'),"), or they may require specific types for the first N entries (",(0,r.kt)("inlineCode",{parentName:"p"},'"items": [{first type...}, {second type...}, ... , {Nth type...}]'),", AKA tuple-type)."),(0,r.kt)("p",null,"Tuple-typed arrays can configure the type of any additional elements using the ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," field; by default, any type is allowed. They may also pass a boolean to enable/disable additional elements, with ",(0,r.kt)("inlineCode",{parentName:"p"},'"additionalItems": true')," being equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},'"additionalItems": {}')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"additionalItems": false')," meaning that only the tuple-defined items are allowed."),(0,r.kt)("p",null,"Destinations may have a difficult time supporting tuple-typed arrays without very specific handling, and as such are permitted to somewhat loosen their requirements. For example, many Avro-based destinations simply declare an array of a union of all allowed types, rather than requiring the correct type in each position of the array."),(0,r.kt)("h4",{id:"objects"},"Objects"),(0,r.kt)("p",null,"As with arrays, objects may declare ",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),", each of which should have a type which conforms to the type system. Objects may additionally accept ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalProperties"),", as ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (any type is acceptable), a specific type (all additional properties must be of that type), or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (no additonal properties are allowed)."),(0,r.kt)("h4",{id:"unions"},"Unions"),(0,r.kt)("p",null,"In some cases, sources may want to use multiple types for the same field. For example, a user might have a property which holds either an object, or a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," explanation of why that data is missing. This is supported with JSON schema's  ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," types."),(0,r.kt)("h4",{id:"untyped-values"},"Untyped values"),(0,r.kt)("p",null,"In some unusual cases, a property may not have type information associated with it. This is represented by the empty schema ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),". As many destinations do not allow untyped data, this will frequently trigger the ",(0,r.kt)("a",{parentName:"p",href:"#unsupported-types"},"string-typed escape hatch"),"."))}m.isMDXComponent=!0}}]);