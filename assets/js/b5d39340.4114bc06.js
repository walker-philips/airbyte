"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[92218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=n,y=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return a?r.createElement(y,o(o({ref:t},p),{},{components:a})):r.createElement(y,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="On Restack",l={unversionedId:"deploying-airbyte/on-restack",id:"deploying-airbyte/on-restack",title:"On Restack",description:"Getting Started",source:"@site/../docs/deploying-airbyte/on-restack.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-restack",permalink:"/deploying-airbyte/on-restack",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-restack.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Deploy Airbyte on Kubernetes using Helm (Beta)",permalink:"/deploying-airbyte/on-kubernetes-via-helm"},next:{title:"Deploy Airbyte on Plural",permalink:"/deploying-airbyte/on-plural"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Sign up for a Restack account",id:"sign-up-for-a-restack-account",level:2},{value:"Add AWS credentials with AdministratorAccess",id:"add-aws-credentials-with-administratoraccess",level:2},{value:"One-click cluster creation with Restack",id:"one-click-cluster-creation-with-restack",level:2},{value:"Deploy Airbyte on Restack",id:"deploy-airbyte-on-restack",level:2},{value:"Start using Airbyte",id:"start-using-airbyte",level:2},{value:"Deploy multiple instances of Airbyte",id:"deploy-multiple-instances-of-airbyte",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"on-restack"},"On Restack"),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"To deploy Airbyte with Restack:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#sign-up-for-a-restack-account"},"Sign up for a Restack account"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#add-aws-credentials-with-administratoraccess"},"Add AWS credentials with AdministratorAccess"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#one-click-cluster-creation-with-restack"},"One-click cluster creation with Restack"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploy-airbyte-on-restack"},"Deploy Airbyte on Restack"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#start-using-airbyte"},"Start using Airbyte"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploy-multiple-instances-of-airbyte"},"Deploy multiple instances of Airbyte"),".")),(0,n.kt)("h2",{id:"sign-up-for-a-restack-account"},"Sign up for a Restack account"),(0,n.kt)("p",null,"To Sign up for a Restack account, visit ",(0,n.kt)("a",{parentName:"p",href:"https://www.restack.io/signup"},"www.restack.io/signup"),". You can sign up with your corporate email address or your GitHub profile. You do not need a credit card to sign up.\nIf you already have an account, go ahead and login to Restack at ",(0,n.kt)("a",{parentName:"p",href:"https://www.restack.io/login"},"www.restack.io/login"),"."),(0,n.kt)("h2",{id:"add-aws-credentials-with-administratoraccess"},"Add AWS credentials with AdministratorAccess"),(0,n.kt)("p",null,"To deploy Airbyte in your own AWS infrastructure with Restack, you will need to add your credentials as the next step. "),(0,n.kt)("p",null,"Make sure that this account has ",(0,n.kt)("em",{parentName:"p"},"AdministratorAccess"),". This is how Restack can ensure an end-to-end cluster creation and cluster management process."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("em",{parentName:"li"},"Clusters")," in the left-hand navigation menu."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("em",{parentName:"li"},"Credentials")," tab."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"Add credential"),"."),(0,n.kt)("li",{parentName:"ol"},"Give a suitable title to your credentials for managing them later."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("em",{parentName:"li"},"AWS Access Key ID")," and ",(0,n.kt)("em",{parentName:"li"},"AWS Secret Access key"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"Add credential"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/accounts/latest/reference/root-user-access-key.html"},"How to get your AWS Access key ID and AWS Secret Access Key"))),(0,n.kt)("h2",{id:"one-click-cluster-creation-with-restack"},"One-click cluster creation with Restack"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Why do I need a cluster?",(0,n.kt)("br",null),"\nRunning your application on a Kubernetes cluster lets you deploy, scale and monitor the application reliably. ")),(0,n.kt)("p",null,"Once you have added your credentials, "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("em",{parentName:"li"},"Clusters")," tab on the same page and click on ",(0,n.kt)("em",{parentName:"li"},"Create cluster"),"."),(0,n.kt)("li",{parentName:"ol"},"Give a suitable name to your cluster."),(0,n.kt)("li",{parentName:"ol"},"Select the region you want to deploy the cluster in."),(0,n.kt)("li",{parentName:"ol"},"Select the AWS credentials you added in the previous step.")),(0,n.kt)("p",null,"The cluster creation process will start automatically. Once the cluster is ready, you will get an email on the email id connected with your account. "),(0,n.kt)("br",null),"Creating a cluster is a one-time process. From here you can add other open source tools or multiple instances of Airbyte in the same cluster.",(0,n.kt)("p",null,"Any application you deploy in your cluster will be accessible via a free ",(0,n.kt)("strong",{parentName:"p"},"restack domain"),". "),(0,n.kt)("br",null),"Contact the Restack team via chat to set a custom domain for your Airbyte instances.",(0,n.kt)("h2",{id:"deploy-airbyte-on-restack"},"Deploy Airbyte on Restack"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"Add application")," from the Cluster description or go to the Applications tab in the left hand side navigation."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"Airbyte"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the cluster you have already provisioned."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"Add application"),".")),(0,n.kt)("h2",{id:"start-using-airbyte"},"Start using Airbyte"),(0,n.kt)("p",null,"Airbyte will be deployed on your cluster and you can access it using the link under the ",(0,n.kt)("em",{parentName:"p"},"URL")," tab.\nYou can also check the workloads and volumes that are deployed within Airbyte."),(0,n.kt)("h2",{id:"deploy-multiple-instances-of-airbyte"},"Deploy multiple instances of Airbyte"),(0,n.kt)("p",null,"Restack makes it easier to deploy multiple instances of Airbyte on the same or multiple clusters. "),(0,n.kt)("br",null),"So you can test the latest version before upgrading or have a dedicated instance for development and for production.")}u.isMDXComponent=!0}}]);