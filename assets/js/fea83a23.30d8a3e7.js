"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[48602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="LinkedIn Ads",l={unversionedId:"integrations/sources/linkedin-ads",id:"integrations/sources/linkedin-ads",title:"LinkedIn Ads",description:"This page guides you through the process of setting up the LinkedIn Ads source connector.",source:"@site/../docs/integrations/sources/linkedin-ads.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/linkedin-ads",permalink:"/integrations/sources/linkedin-ads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/linkedin-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Lever Hiring",permalink:"/integrations/sources/lever-hiring"},next:{title:"LinkedIn Pages",permalink:"/integrations/sources/linkedin-pages"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up LinkedIn Ads",id:"step-1-set-up-linkedin-ads",level:2},{value:"Notes:",id:"notes",level:3},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported Streams and Sync Modes",id:"supported-streams-and-sync-modes",level:2},{value:"NOTE:",id:"note",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkedin-ads"},"LinkedIn Ads"),(0,r.kt)("p",null,"This page guides you through the process of setting up the LinkedIn Ads source connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The LinkedIn Ads account with permission to access data from accounts you want to sync.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The LinkedIn Ads account with permission to access data from accounts you want to sync."),(0,r.kt)("li",{parentName:"ul"},"Authentication Options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OAuth2.0:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," from your ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret")," from your ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Refresh Token")," obtained from successful authorization with ",(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret")))),(0,r.kt)("li",{parentName:"ul"},"Access Token:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  * `Access Token` obtained from successful authorization with `Client ID` + `Client Secret`\n")))))),(0,r.kt)("h2",{id:"step-1-set-up-linkedin-ads"},"Step 1: Set up LinkedIn Ads"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://developer.linkedin.com/"},"Login to LinkedIn")," with a developer account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create App")," icon on the center of the page or ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"use here"),". Fill in the required fields:  "),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"App Name"),", enter a name."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Page"),", enter your company's name or LinkedIn Company Page URL."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Privacy policy URL"),", enter the link to your company's privacy policy."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"App logo"),", upload your company's logo."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Legal Agreement"),", select ",(0,r.kt)("strong",{parentName:"li"},"I have read and agree to these terms"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create App"),", on the bottom right of the screen. LinkedIn redirects you to a page showing the details of your application."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify your app. You can verify your app using the following steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To display the settings page, click the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," tab. On the ",(0,r.kt)("strong",{parentName:"p"},"App Settings")," section, click ",(0,r.kt)("strong",{parentName:"p"},"Verify")," under ",(0,r.kt)("strong",{parentName:"p"},"Company"),". A popup window will be displayed. To generate the verification URL, click on ",(0,r.kt)("strong",{parentName:"p"},"Generate URL"),", then copy and send the URL to the Page Admin (this may be you). Click on ",(0,r.kt)("strong",{parentName:"p"},"I'm done"),".\nIf you are the administrator of your Page, simply run the URL in a new tab (if not, an administrator will have to do the next step). Click on ",(0,r.kt)("strong",{parentName:"p"},"Verify"),". Finally, Refresh the tab of app creation, the app should now be associated with your Page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To display the Products page, click the ",(0,r.kt)("strong",{parentName:"p"},"Product")," tab. For ",(0,r.kt)("strong",{parentName:"p"},"Marketing Developer Platform")," click on the ",(0,r.kt)("strong",{parentName:"p"},"Request access"),". A popup window will be displayed. Review and Select ",(0,r.kt)("strong",{parentName:"p"},"I have read and agree to these terms"),". Finally, click ",(0,r.kt)("strong",{parentName:"p"},"Request access"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To authorize your application, click the ",(0,r.kt)("strong",{parentName:"p"},"Auth")," tab. The authentication page is displayed. Copy the ",(0,r.kt)("strong",{parentName:"p"},"client_id")," and ",(0,r.kt)("strong",{parentName:"p"},"client_secret")," (for later steps). For ",(0,r.kt)("strong",{parentName:"p"},"Oauth 2.0 settings"),", Provide a ",(0,r.kt)("strong",{parentName:"p"},"redirect_uri")," (for later steps).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click and review the ",(0,r.kt)("strong",{parentName:"p"},"Analytics")," tab. This page shows the daily application and user/member limits with the percent used for each resource endpoint."))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional for Airbyte Cloud) Authorize your app. In case your authorization expires:"),(0,r.kt)("p",{parentName:"li"},"The authorization token ",(0,r.kt)("inlineCode",{parentName:"p"},"lasts 60-days before expiring"),". The connector app will need to be reauthorized when the authorization token expires.\nCreate an Authorization URL with the following steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the highlighted parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_CLIENT_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_REDIRECT_URI")," in the URL (",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social"),") from the scope obtain below.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up permissions for the following scopes ",(0,r.kt)("inlineCode",{parentName:"p"},"r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social"),". For ",(0,r.kt)("strong",{parentName:"p"},"OAuth2.0"),", copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret")," from your ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer Application"),". And copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Refresh Token")," obtained from successful authorization with ",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the modified ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," in the browser. You will be redirected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To authorize the app, click ",(0,r.kt)("strong",{parentName:"p"},"Allow"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," parameter listed in the redirect URL in the Browser header URL.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional for Airbyte Cloud) Run the following curl command using ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Command line")," with the parameters replaced to return your ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," expires in 2-months."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},' curl -0 -v -X POST https://www.linkedin.com/oauth/v2/accessToken\\\n -H "Accept: application/json"\\\n -H "application/x-www-form-urlencoded"\\\n -d "grant_type=authorization_code"\\\n -d "code=YOUR_CODE"\\\n -d "client_id=YOUR_CLIENT_ID"\\\n -d "client_secret=YOUR_CLIENT_SECRET"\\\n -d "redirect_uri=YOUR_REDIRECT_URI"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional for Airbyte Cloud) Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),". Same as the approach in  ",(0,r.kt)("inlineCode",{parentName:"p"},"Step 5")," to authorize LinkedIn Ads connector."))),(0,r.kt)("h3",{id:"notes"},"Notes:"),(0,r.kt)("p",null,"The API user account should be assigned the following permissions for the API endpoints:\nEndpoints such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Account Users"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Direct Sponsored Contents"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Campaign Groups"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Campaigns"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Creatives")," requires the following permissions set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_ads"),": read ads ","(","Recommended",")",", ",(0,r.kt)("inlineCode",{parentName:"li"},"rw_ads"),": read-write ads\nEndpoints such as: ",(0,r.kt)("inlineCode",{parentName:"li"},"Ad Analytics by Campaign"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Ad Analytics by Creatives")," requires the following permissions set:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_ads_reporting"),": read ads reporting\nThe complete set of permissions is as follows:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social"))),(0,r.kt)("p",null,"The API user account should be assigned one of the following roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ACCOUNT_BILLING_ADMIN"),(0,r.kt)("li",{parentName:"ul"},"ACCOUNT_MANAGER"),(0,r.kt)("li",{parentName:"ul"},"CAMPAIGN_MANAGER"),(0,r.kt)("li",{parentName:"ul"},"CREATIVE_MANAGER"),(0,r.kt)("li",{parentName:"ul"},"VIEWER ","(","Recommended",")")),(0,r.kt)("p",null,"To edit these roles, sign in to Campaign Manager and follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/help/lms/answer/a496075"},"these instructions"),"."),(0,r.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Login to your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Ads")," from the Source type dropdown and enter a name for this connector."),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Start Date")," - the starting point for your data replication."),(0,r.kt)("li",{parentName:"ol"},"Add your ",(0,r.kt)("inlineCode",{parentName:"li"},"Account IDs (Optional)")," if required."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Authenticate your account"),"."),(0,r.kt)("li",{parentName:"ol"},"Login and Authorize the LinkedIn Ads account"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the local Airbyte page."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the connector and select ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Ads")," from the Source type dropdown."),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Start Date")," - the starting point for your data replication."),(0,r.kt)("li",{parentName:"ol"},"Add your ",(0,r.kt)("inlineCode",{parentName:"li"},"Account IDs (Optional)")," if required."),(0,r.kt)("li",{parentName:"ol"},"Choose between Authentication Options:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"OAuth2.0:")," Copy and paste info (",(0,r.kt)("strong",{parentName:"li"},"Client ID"),", ",(0,r.kt)("strong",{parentName:"li"},"Client Secret"),") from your ",(0,r.kt)("strong",{parentName:"li"},"LinkedIn Ads developer application"),", and obtain the ",(0,r.kt)("strong",{parentName:"li"},"Refresh Token")," using ",(0,r.kt)("strong",{parentName:"li"},"Set up LinkedIn Ads"),"  guide steps and paste it into the corresponding field."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Access Token:")," Obtain the ",(0,r.kt)("strong",{parentName:"li"},"Access Token")," using ",(0,r.kt)("strong",{parentName:"li"},"Set up LinkedIn Ads"),"  guide steps and paste it into the corresponding field."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,r.kt)("h2",{id:"supported-streams-and-sync-modes"},"Supported Streams and Sync Modes"),(0,r.kt)("p",null,"This Source is capable of syncing the following data as streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts"},"Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#find-ad-account-users-by-accounts"},"Account Users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#search-for-campaign-groups"},"Campaign Groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?tabs=http#search-for-campaigns"},"Campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-creatives?tabs=http#search-for-creatives"},"Creatives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/create-and-manage-video?tabs=http#finders"},"Ad Direct Sponsored Contents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?tabs=curl#ad-analytics"},"Ad Analytics by Campaign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?tabs=curl#ad-analytics"},"Ad Analytics by Creative"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Sync Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Overwrite Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduplication Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,r.kt)("h3",{id:"note"},"NOTE:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Direct Sponsored Contents")," stream includes information about VIDEO ADS, as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"SINGLE IMAGE ADS")," and other directly sponsored ads your account might have."),(0,r.kt)("p",null,"For Analytics Streams such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Analytics by Campaign")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ad Analytics by Creative"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"pivot")," column name is renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"_pivot")," to handle the data normalization correctly and avoid name conflicts with certain destinations."),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whole number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DDThh:mm: ss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"True/False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"LinkedIn Ads has Official Rate Limits for API Usage, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/shared/api-guide/concepts/rate-limits?context=linkedin/marketing/context"},"more information here"),". Rate limited requests will receive a 429 response. These limits reset at midnight UTC every day. In rare cases, LinkedIn may also return a 429 response as part of infrastructure protection. API service will return to normal automatically. In such cases, you will receive the following error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\"Caught retriable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,r.kt)("p",null,"This is expected when the connector hits the 429 - Rate Limit Exceeded HTTP Error. If the maximum available API requests capacity is reached, you will have the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"Max try rate limit exceeded..."\n')),(0,r.kt)("p",null,"After 5 unsuccessful attempts - the connector will stop the sync operation. In such cases check your Rate Limits ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"on this page")," ",">"," Choose your app ",">"," Analytics."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18111"},"18111")),(0,r.kt)("td",{parentName:"tr",align:"left"},"for adDirectSponsoredContents stream skip accounts which are part of organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17724"},"17724")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Retry 429/5xx errors when refreshing access token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17326"},"17326")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,r.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13495"},"13495")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"td"},"base-normalization")," issue on ",(0,r.kt)("inlineCode",{parentName:"td"},"Destination Redshift")," caused by wrong casting of ",(0,r.kt)("inlineCode",{parentName:"td"},"pivot")," column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"12482")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11690"},"11690")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Small documentation corrections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8984"},"8984")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8382"},"8382")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Modify log message in rate-limit cases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-11"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7839"},"7839")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added OAuth support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-02"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6610"},"6610")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix for ",(0,r.kt)("inlineCode",{parentName:"td"},"Campaigns/targetingCriteria")," transformation, coerced ",(0,r.kt)("inlineCode",{parentName:"td"},"Creatives/variables/values")," to string by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5285"},"5285")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial release of Native LinkedIn Ads connector for Airbyte")))))}m.isMDXComponent=!0}}]);