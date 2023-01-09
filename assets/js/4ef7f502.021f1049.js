"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[82091],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},o="Databend",l={unversionedId:"integrations/destinations/databend",id:"integrations/destinations/databend",title:"Databend",description:"This page guides you through the process of setting up the Databend destination connector.",source:"@site/../docs/integrations/destinations/databend.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/databend",permalink:"/integrations/destinations/databend",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/databend.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"CSV",permalink:"/integrations/destinations/csv"},next:{title:"Databricks Lakehouse",permalink:"/integrations/destinations/databricks"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Output Schema",id:"output-schema",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Target Database",id:"target-database",level:4},{value:"Setup the Databend Destination in Airbyte",id:"setup-the-databend-destination-in-airbyte",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databend"},"Databend"),(0,r.kt)("p",null,"This page guides you through the process of setting up the ",(0,r.kt)("a",{parentName:"p",href:"https://databend.rs/"},"Databend")," destination connector."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"output-schema"},"Output Schema"),(0,r.kt)("p",null,"Each stream will be output into its own table in Databend. Each table will contain 3 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in Databend is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in Databend is ",(0,r.kt)("inlineCode",{parentName:"li"},"TIMESTAMP"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in Databend is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARVHAR"),".")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"You can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databend.com/using-databend-cloud/warehouses/connecting-a-warehouse"},"Connecting to a Warehouse docs")," to get the user, password, host etc."),(0,r.kt)("p",null,"Or You can create such a user by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GRANT CREATE ON * TO airbyte_user;\n")),(0,r.kt)("p",null,"Make sure the Databend user with the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can create tables and write rows."),(0,r.kt)("li",{parentName:"ul"},"can create databases e.g:")),(0,r.kt)("p",null,"You can also use a pre-existing user but we highly recommend creating a dedicated user for Airbyte."),(0,r.kt)("h4",{id:"target-database"},"Target Database"),(0,r.kt)("p",null,"You will need to choose an existing database or create a new database that will be used to store synced data from Airbyte."),(0,r.kt)("h3",{id:"setup-the-databend-destination-in-airbyte"},"Setup the Databend Destination in Airbyte"),(0,r.kt)("p",null,"You should now have all the requirements needed to configure Databend as a destination in the UI. You'll need the following information to configure the Databend destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database"))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"######TODO: more info"))}p.isMDXComponent=!0}}]);